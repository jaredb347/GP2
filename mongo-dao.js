const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "swapi";
const collectionName = "films";
let collection;
async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collection = db.collection(collectionName);
}

startup();
//find planet
module.exports.findAllPlanets = function (callback) {
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((planets) => callback(planets));
};
