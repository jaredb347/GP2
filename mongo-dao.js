const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "swapi";
const collectionName = "planets";
let collection;
async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collection = db.collection(collectionName);
}

startup();
//find all planets
module.exports.findAllPlanets = function (callback) {
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((planets) => callback(planets));
};
// find a single planet
module.exports.findPlanet = function (ids, callback) {
  let dataPromise = collection.findOne({ id: +ids });
  dataPromise.then((planet) => callback(planet));
};
//find all characters
module.exports.findAllCharacters = function (callback) {
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((characters) => callback(characters));
};
//find one character
module.exports.findCharacter = function (ids, callback) {
  let dataPromise = collection.findOne({ id: +ids });
  dataPromise.then((character) => callback(character));
};
