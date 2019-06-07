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

express()
  .use(express.static(path.join(__dirname, 'client/build')))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/', (req, res) => res.render('client/build/index.html'))
  .get('/getEntries', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url)
      const entries = yield find(db, 'entries')
      const lines= yield find(db, 'trainlines')
      entries.map((entry, index) => {
        entry.engines.map((engine) => {
          const matchedLine = lines.find(line => line.name === engine.line)
          engine.color = matchedLine.color
        })
        entry.number = index;
      })
      // res.end(JSON.stringify(yield find(db, 'entries')))
      // Chronological order... #TODO
      res.end(JSON.stringify(entries.reverse()))
      db.close()
    }).catch(err => console.log(err))
  })
  .get('/getLines', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url)
      const lines= yield find(db, 'trainlines')
      // Alphabetical order... #TODO
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
        time: req.body.time
      }
      console.log(dbo.collection('entries').updateOne(
        { date: req.body.date },
        { $set: doc },
        { upsert: true }
      ))
      const entries = yield find(db, 'entries')
      res.end(JSON.stringify(entries.reverse()))
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