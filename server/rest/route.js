const { Router } = require("express");
const newsController = require("./newsController");
const api = Router();

api.get("/everything", function(req, res) {
    newsController.getNews(req, res);
});

api.get("/top-head-lines", function(req, res) {
    newsController.getNewsByTopHeadLines(req, res);
});

api.get("/sources", function(req, res) {
    newsController.getNewsBySource(req, res);
});

module.exports = { api };