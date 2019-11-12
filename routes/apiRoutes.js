var db = require("../models");

module.exports = function(app) {
  app.get("/api/games", function(req, res) {
    db.Game.findAll({}).then(games => {
      res.json(games);
    });
  });

  app.get("/api/games/:id", function(req, res) {
    db.Game.findOne({
      where: {
        id: req.params.id
      }
    }).then(game => {
      res.json(game);
    });
  });

  app.post("/api/games", function(req, res) {
    const {
      name,
      endCondition,
      minPlayers,
      maxPlayers,
      pointGoal,
      maxRounds
    } = req.body;
    db.Game.create({
      name,
      endCondition,
      minPlayers,
      maxPlayers,
      pointGoal: pointGoal === "" ? null : pointGoal,
      maxRounds: maxRounds === "" ? null : maxRounds
    }).then(function(game) {
      console.log(game.dataValues);
      res.json(game.dataValues);
    });
  });

  app.delete("/api/games/:id", function(req, res) {
    db.Game.destroy({ where: { id: req.params.id } }).then(function(game) {
      res.json(game);
    });
  });
};
