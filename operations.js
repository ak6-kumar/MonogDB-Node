const assert = require('assert');

exports.insertDoc = (db, document, collection, callback) =>{
    const coll = db.collection(collection);
    return coll.insert(document);
};

exports.findDocs = (db, collection, callback) =>{
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDoc = (db, document, collection, callback) =>{
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

exports.updateDoc = (db, document, update, collection, callback) =>{
    const coll = db.collection(collection);
    return coll.updateOne(document,{$set:update},null);
};