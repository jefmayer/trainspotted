const bodyParser = require("body-parser");
const co = require('co');
const env = require('dotenv');
const express = require('express');
const mongo = require('mongodb');
const path = require('path');

env.config();

const PORT = process.env.PORT || 5003;
const host = '0.0.0.0';
const uri = process.env.MONGOLAB_URI;
const name = process.env.MONGODB_DB;
const { MongoClient } = mongo;

const find = (client, collectionName) => (
  co(function * () {
    const db = client.db(name);
    const collection = db.collection(collectionName);
    const docs = yield collection.find({}).toArray();
    return docs;
  })
);

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

console.log('trainspotted-app: -----> app ready');
const server = express();
server.use(express.static(path.join(__dirname, '../build')));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
server.get('/getEntries', function(req, res) {
  co(function * () {
    const db = yield MongoClient.connect(uri, { useNewUrlParser: true })
    const entries = sortedEntries(
      yield find(db, 'entries'),
      yield find(db, 'trainlines')
    );
    res.end(JSON.stringify(entries))
    db.close()
  }).catch(err => console.log(err))
});
server.get('/getLines', function(req, res) {
  co(function * () {
    const db = yield MongoClient.connect(uri, { useNewUrlParser: true })
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
});
server.post('/addEntry', function(req, res) {    
  co(function * () {
    const db = yield MongoClient.connect(uri, { useNewUrlParser: true })
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
});
server.post('/deleteEntry', function(req, res) {
  co(function * () {
    const db = yield MongoClient.connect(uri, { useNewUrlParser: true });
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
});
server.post('/addTrainLine', function(req, res) {
  co(function * () {
    const db = yield MongoClient.connect(uri, { useNewUrlParser: true })
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
});
server.post('/login', function(req, res) {
  co(function * () {
    const db = yield MongoClient.connect(uri, { useNewUrlParser: true })
    const arr = yield find(db, 'users')
    for (var i = 0; i <arr.length; i++) {
      if (arr[i].user === req.body.user && arr[i].password === req.body.password) {
        res.end(JSON.stringify([{"success": "success"}]))
        return
      }
    }
    res.end(JSON.stringify([{"success": "error"}]))
  }).catch(err => console.log(err))
});
server.listen(PORT, host, (err) => {
  if (err) throw err;
  console.log(`trainspotted-app: -----> ready on http://${host}:${PORT}`);
});