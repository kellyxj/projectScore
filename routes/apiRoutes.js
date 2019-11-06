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
        db.Game.create(req.body).then(function(game) {
            res.json(game);
        });
    });

    app.delete("/api/games/:id", function(req, res) {
        db.Game.destroy({ where: { id: req.params.id } }).then(function(game) {
            res.json(game);
        });
    });
};
