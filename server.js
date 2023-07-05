const express = require("express");
const dao = require("./mongo-dao");
const app = express();
app.use(express.json());
const port = 3000;
console.log("server starting on port: " + port);
app.listen(port);

/*app.get("/api/planets", function (req, res) {
  res.send({ planet: "test-planet" });
});*/

app.get("/api/planets", (req, res) => {
  dao.findAllPlanets((planets) => {
    if (!planets) {
      res.status(404).end();
    } else {
      res.send(planets);
    }
  });
});

app.get("/api/planets/:id", (req, res) => {
  dao.findPlanet(req.params.id, (planet) => {
    if (!planet) {
      res.status(404).end();
    } else {
      res.send(planet);
    }
  });
});
