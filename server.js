const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');


let app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'sankeyGraph';
app.get('/getValues', (req, res)=> {
    let result 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
   
   /*  insertDocuments(db, function(err, result){
      if(err){return console.log(err)}
      console.log(result)
    }, keys) */
   
    findDocuments(db,  function(docs) {
        result = docs
        console.log('reberti', result)
        console.log('joao', result)
        res.send(JSON.stringify(result))
        client.close()
    }) 
  
    
  });
  
  
 
})

app.post('/update', (req, res)=>{
    console.log(req.body)
    let newRecord = req.body
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       
        const db = client.db(dbName);
       
       /*  insertDocuments(db, function(err, result){
          if(err){return console.log(err)}
          console.log(result)
        }, keys) */
       
        updateDocument(db,  function() {
            res.send(200)
            client.close()
        }, newRecord) 
      
        
      });


})


const keys = [
    {field: "Applied", value : 16},
    {field: "No reply", value : 14},
    {field: "Rejected", value : 0},
    {field: "1st round", value : 1},
    {field: "2nd round", value : 0},
    {field: "3rd round", value : 0},
    {field: "4th round", value : 0},
    {field: "5th round", value : 0},
    {field: "Offer", value : 0},

]
app.post('/startFromScratch', (req, res)=>{
    console.log(req.body)
    let newRecord = req.body
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       
        const db = client.db(dbName);
       
        insertDocuments(db, function(err, result){
          if(err){return console.log(err)}
          console.log(result)
          res.send(200)
          client.close()

        }, keys)
       
        
      });


})


const insertDocuments = function(db, callback, records) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany( records, function(err, result) {
      assert.equal(err, null);
      assert.equal(9, result.result.n);
      assert.equal(9, result.ops.length);
      console.log("Inserted 9 documents into the collection");
      callback(result);
    });
  }
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
 
  const updateDocument = function(db, callback, newRecord) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ field : newRecord.field }
      , { $set: { field : newRecord.field , value : parseInt(newRecord.value) } }, function(err, result) {
      callback(result);
    });
  }

  app.listen(3010, function () {
    console.log('Example app listening on port 3010.');
});