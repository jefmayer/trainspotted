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
      console.log('Connected successfully to server')
      res.end(JSON.stringify(yield find(db, 'entries')))
      db.close()
    }).catch(err => console.log(err))
  })
  .post('/addRecord', function(req, res) {    
    co(function * () {
      const db = yield MongoClient.connect(url)
      var dbo = db.db('trainspotted')
      var doc = {
        date: req.body.date,
        mobility: req.body.mobility,
        activity: req.body.activity,
        appetite: req.body.appetite,
        pain: req.body.pain,
        stress: req.body.stress,
        notes: req.body.notes
      }
      console.log(doc)
      console.log(dbo.collection('entries').updateOne(
        { date: req.body.date },
        { $set: doc },
        { upsert: true }
      ))
      res.end(JSON.stringify({success: "success"}))
      db.close();
    }).catch(err => console.log(err))
  })
  .post('/login', function(req, res) {
    co(function * () {
      const db = yield MongoClient.connect(url)
      var arr = yield find(db, 'users');
      for (var i = 0; i <arr.length; i++) {
        if (arr[i].username === req.body.username && arr[i].password === req.body.password) {
          res.end(JSON.stringify([{"success": "success"}]))
          return
        }
      }
      res.end(JSON.stringify([{"success": "error"}]))
    }).catch(err => console.log(err))
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))