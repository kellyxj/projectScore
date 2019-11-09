var db = require("../models");
const path = require("path");
module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Load example page and pass in an example by id
    app.get("/play", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/play.html"));
    });

    app.get("/create", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/create.html"));
    });

    // Render 404 page for any unmatched routes
};
