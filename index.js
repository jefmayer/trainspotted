const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000

const mongo = require('mongodb');

var MongoClient = mongo.MongoClient,
    co = require('co'),
    assert = require('assert')
  
var url = process.env.MONGOLAB_URI

const find = function (db, col) {
  return co(function * () {
    // Get the documents collection
    const dbo = db.db('trainspotted');
    const collection = dbo.collection(col);
    const docs = yield collection.find({}).toArray();
    return docs;
  })
};

const sortedEntries = function(entries, lines) {
  entries.map((entry, index) => {
    entry.engines.map((engine) => {
      const matchedLine = lines.find(line => line.name === engine.line);
      engine.color = matchedLine.color;
    })
    entry.number = index;
  })
  return entries.sort((a, b) => new Date(b.date) - new Date(a.date));
};

express()
  .use(express.static(path.join(__dirname, 'client/build')))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/', (req, res) => res.render('client/build/index.html'))
  .get('/getEntries', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url, { useNewUrlParser: true })
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
      const db = yield MongoClient.connect(url, { useNewUrlParser: true })
      const lines= yield find(db, 'trainlines')
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
      const db = yield MongoClient.connect(url, { useNewUrlParser: true })
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
  .post('/deleteEntry', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url, { useNewUrlParser: true });
      let dbo = db.db('trainspotted');
      dbo.collection('entries').deleteOne(
        { _id: new mongo.ObjectId(req.body.id) },
      );
      const entries = sortedEntries(
        yield find(db, 'entries'),
        yield find(db, 'trainlines')
      );
      res.end(JSON.stringify(entries));
      db.close();
    }).catch(err => console.log(err));
  })
  .post('/addTrainLine', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url, { useNewUrlParser: true })
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
      const db = yield MongoClient.connect(url, { useNewUrlParser: true })
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