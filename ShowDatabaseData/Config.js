// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database1 = "MongoDBs";
const database2 = "NodeJSdb";
const client = new MongoClient(url);

async function getData() {
  // Database 1

  let result = await client.connect();
  let db = result.db(database1);
  let collection = db.collection("User");
  let response = await collection.find({ Brand: "OnePlus" }).toArray();

  // Database 2

  let result1 = await client.connect();
  let db1 = result1.db(database2);
  let collection1 = db1.collection("Admin");
  let response1 = await collection1.find({}).toArray();

  console.log("-------------Database For MongoDB-------------");
  console.log(response);

  console.log("-------------Database For NodeJS-------------");

  console.log(response1);
}

getData();
