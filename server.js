const express = require("express");
const dao = require("./mongo-dao");
const app = express();
app.use(express.json());
const port = 3000;
console.log("server starting on port: " + port);
app.listen(port);

//all planets
app.get("/api/planets", (req, res) => {
  dao.findAllPlanets((planets) => {
    if (!planets) {
      res.status(404).end();
    } else {
      res.send(planets);
    }
  });
});
//oner planet
app.get("/api/planets/:id", (req, res) => {
  dao.findPlanet(req.params.id, (planet) => {
    if (!planet) {
      res.status(404).end();
    } else {
      res.send(planet);
    }
  });
});
//find all the people
app.get("/api/characters", (req, res) => {
  dao.findAllCharacters((characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
});
//find one person
app.get("/api/characters/:id", (req, res) => {
  dao.findCharacter(req.params.id, (character) => {
    if (!character) {
      res.status(404).end();
    } else {
      res.send(character);
    }
  });
});
//find all the films
app.get("/api/films", (req, res) => {
  dao.findAllFilms((films) => {
    if (!films) {
      res.status(404).end();
    } else {
      res.send(films);
    }
  });
});
//find one film
app.get("/api/films/:id", (req, res) => {
  dao.findFilm(req.params.id, (film) => {
    if (!film) {
      res.status(404).end();
    } else {
      res.send(film);
    }
  });
});
//find all characters from a specific film
app.get("/api/films/:id/characters", (req, res) => {
  dao.findCharactersByFilm(req.params.id, (characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
});
