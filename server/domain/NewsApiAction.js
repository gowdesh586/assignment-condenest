const NewsAPI = require("newsapi");
const newsApi = new NewsAPI(process.env.NEWS_API_KEY);

async function getNews(q="trump", category="politics", language="en", country="us") {
    try{
        return await newsApi.v2.topHeadlines({
            q,
            category,
            language,
            country
        });
    }catch {
        throw Error("News API is down");
    }
}

async function getNewsBySource(category="technology", language="en", country="us") {
    try{
        return await newsApi.v2.sources({
            category,
            language,
            country
        });
    }catch {
        throw Error("News API is down");
    }
}

async function getNewsByTopHeadLines(q="trump",
                                     sources="bbc-news,the-verge",
                                     domains="bbc.co.uk,techcrunch.com",
                                     language="en",
                                     sortBy="relevancy",
                                     page=2) {
    try{
        return await newsApi.v2.everything({
            q,
            sources,
            domains,
            language,
            sortBy,
            page
        });
    }catch {
        throw Error("News API is down");
    }
}

module.exports = { getNews, getNewsBySource, getNewsByTopHeadLines };