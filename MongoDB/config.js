// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = 'NodeJSdb';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection('Admin');
}

module.exports = dbConnect;