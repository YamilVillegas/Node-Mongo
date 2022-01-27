const MongoClient = require('mongodb').MongoClient;
// Required the MongoDB Driver we installed
const assert = require('assert').strict;

const url = 'mongodb://localhost:27017/';
// Sets up the connection to the server
const dbname= 'nucampsite';

MongoClient.connect( 
    url, 
    { useUnifiedTopology: true }, 
    (err,client) => {
    // We used the MongoClient above to connect to the MongoDB server
        assert.strictEqual(err,null);

        console.log('Connected correctly to server');

        const db = client.db(dbname);
        // We used the client object from MongoClient.connect to connect to the database
        db.dropCollection('campsites', (err, result) => {
            assert.strictEqual(err,null);
            console.log('Dropped Collection', result);
        // We deleted or droppped the campsites collection from the database 
            const collection = db.collection('campsites');
        // We recreated the collection inserting a new document inserting a new document into the campsites collection
            collection.insertOne({name: "Breadcrumb Trail Campground", description: "Test"},
            (err, result) => {
                assert.strictEqual(err, null);
                console.log('Insert Document:', result.ops);

                collection.find().toArray((err, docs) => {
                    assert.strictEqual(err, null);
                    console.log('Found Documents:', docs);
        // We use the collection.find method along with the toArray method to be able to console log all the documents from the campsites collection
                    client.close();
        // We then closed the client disconnecting them from the server
                })
            })
        })
    });

    // We handled any errors using the node error callback convention
    // We used the assert core module to stop the application if any errors occured