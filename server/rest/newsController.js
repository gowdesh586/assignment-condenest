const newsAction = require("../domain/NewsApiAction");

async function getNews(req, res) {
    try {
        const {q, country} = req.query;
        const news = await newsAction.getNews(q,country);
        return res.json(news);
    } catch (error) {
        return res.json(error);
    }
}

async function getNewsByTopHeadLines(req, res) {
    try {
        const news = await newsAction.getNewsByTopHeadLines();

        return res.json(news);
    } catch (error) {
        return res.json(error);
    }
}

async function getNewsBySource(req, res) {
    try {
        const news = await newsAction.getNewsBySource();
        return res.json(news);
    } catch (error) {
        return res.json(error);
    }
}

module.exports = {getNewsBySource, getNewsByTopHeadLines, getNews};