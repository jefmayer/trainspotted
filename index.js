const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000

var MongoClient = require('mongodb').MongoClient,
    co = require('co'),
    assert = require('assert')
  
var url = process.env.MONGOLAB_URI

var find = function (db, col) {
  return co(function * () {
    // Get the documents collection
    const dbo = db.db('trainspotted')
    const collection = dbo.collection(col)
    const docs = yield collection.find({}).toArray()
    return docs
  })
}

var findPreviousSightings = function(line, number, entries) {
  
}

var sortedEntries = function(entries, lines) {
  entries.map((entry, index) => {
    entry.engines.map((engine) => {
      const matchedLine = lines.find(line => line.name === engine.line)
      engine.color = matchedLine.color
      engine.sightings = findPreviousSightings(engine.line, engine.number, entries);
    })
    entry.number = index;
  })
  return entries.sort(function(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  });
}

express()
  .use(express.static(path.join(__dirname, 'client/build')))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/', (req, res) => res.render('client/build/index.html'))
  .get('/getEntries', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url)
      const entries = sortedEntries(
        yield find(db, 'entries'),
        yield find(db, 'trainlines')
      );
      res.end(JSON.stringify(entries))
      db.close()
    }).catch(err => console.log(err))
  })
  .get('/getLines', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url)
      const lines= yield find(db, 'trainlines')
      // Alphabetical order... #TODO
      lines.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      res.end(JSON.stringify(lines))
      db.close()
    }).catch(err => console.log(err))
  })
  .post('/addEntry', function(req, res) {    
    co(function * () {
      const db = yield MongoClient.connect(url)
      var dbo = db.db('trainspotted')
      var doc = {
        date: req.body.date,
        direction: req.body.direction,
        engines: req.body.engines,
        id: req.body.id,
        notes: req.body.notes,
        time: req.body.time
      }
      dbo.collection('entries').updateOne(
        { id: req.body.id },
        { $set: doc },
        { upsert: true }
      )
      const entries = sortedEntries(
        yield find(db, 'entries'),
        yield find(db, 'trainlines')
      );
      res.end(JSON.stringify(entries))
      db.close();
    }).catch(err => console.log(err))
  })
  .post('/addTrainLine', function(req, res) {    
    co(function * () {
      const db = yield MongoClient.connect(url)
      var dbo = db.db('trainspotted')
      var doc = {
        name: req.body.lineName,
        id: req.body.id,
        color: req.body.lineColor,
        short: req.body.lineShortName
      }
      dbo.collection('trainlines').updateOne(
        { id: req.body.id },
        { $set: doc },
        { upsert: true }
      )
      const entries = sortedEntries(
        yield find(db, 'trainlines'),
      );
      res.end(JSON.stringify(entries))
      db.close();
    }).catch(err => console.log(err))
  })
  .post('/login', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url)
      const arr = yield find(db, 'users')
      for (var i = 0; i <arr.length; i++) {
        if (arr[i].user === req.body.user && arr[i].password === req.body.password) {
          res.end(JSON.stringify([{"success": "success"}]))
          return
        }
      }
      res.end(JSON.stringify([{"success": "error"}]))
    }).catch(err => console.log(err))
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))