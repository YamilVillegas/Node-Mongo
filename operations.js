const assert = require('assert').strict;

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insertOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};
// const coll = db.collection(collection); gives us access to the collection inside the database
// The insertOne method if the error is null we deliver the result to the callback.

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find().toArray((err, docs) => {
        assert.strictEqual(err, null);
        callback(docs);
    });
};
// const coll = db.collection(collection); gives us access to the collection inside the database
// We use col.find to look for all the documents in the collection. We then use toArray to put all the documents that were found into an array.
// If there is no error take the docs array and run the callback that was received as an argument.

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};
// const coll = db.collection(collection); gives us access to the collection inside the database
// We use the deleteone method and we pass in the document method so we can choose which one to delete.
// If there is no error to take we run the callback function and give it a result about what was deleted.

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
}; 
// For the update one method we pass it document, an update operator { $set: update } to write over existing information.
// We call the callback with the result of the update.