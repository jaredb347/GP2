const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "swapi";
//let collectionName = "planets";
let collection;
let dbPool;
async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  dbPool = client.db(dbName);
  //collection = db.collection(collectionName);
}

startup();
//find all planets
module.exports.findAllPlanets = function (callback) {
  collection = dbPool.collection("planets");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((planets) => callback(planets));
};
// find a single planet
module.exports.findPlanet = function (ids, callback) {
  collection = dbPool.collection("planets");
  let dataPromise = collection.findOne({ id: +ids });
  dataPromise.then((planet) => callback(planet));
};
//find all characters
module.exports.findAllCharacters = function (callback) {
  collection = dbPool.collection("characters");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((characters) => callback(characters));
};
//find one character
module.exports.findCharacter = function (ids, callback) {
  collection = dbPool.collection("characters");
  let dataPromise = collection.findOne({ id: +ids });
  dataPromise.then((character) => callback(character));
};
//find all films
module.exports.findAllFilms = function (callback) {
  collection = dbPool.collection("films");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((films) => callback(films));
};
//find one film
module.exports.findFilm = function (ids, callback) {
  collection = dbPool.collection("films");
  let dataPromise = collection.findOne({ id: +ids });
  dataPromise.then((film) => callback(film));
};
//find all characters from a specific film
module.exports.findCharactersByFilm = function (ids, callback) {
  collection = dbPool.collection("characters");
  let dataPromise = collection.findOne({ id: +ids });
  dataPromise.then((character) => callback(character));
};

// module.exports.findCharactersByFilm = async function (id, callback) {
//   collection = dbPool.collection("films_characters");
//   let dataPromise = collection
//     .find({ film_id: +id })
//     .toArray(async (err, matches) => {
//       let characters = [];
//       for (let match of matches) {
//         let character_id = match.character_id;
//         console.log(character_id);
//         collection = dbPool.collection("characters");
//         let data = await collection.find({ id: +character_id }).toArray();
//         characters.push({ id: character_id, name: data[0].name });
//       }
//       if (!err) {
//         dataPromise.then((characters) => callback(characters));
//       } else {
//         callback("failed to find characters", undefined);
//       }
//     });
// };
