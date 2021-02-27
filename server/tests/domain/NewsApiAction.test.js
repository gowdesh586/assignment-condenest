const newApiAction = require("../../domain/NewsApiAction");

// We consider actual api response for testing, ideal solution to make mock for all news api.

describe("NewsApiAction", function () {
    describe("getNews",  () => {
        test("If query string is xxxxxx then articles must be empty", async () => {
            const expectedResponse = {"articles": [], "status": "ok", "totalResults": 0};
            const actualResponse = await newApiAction.getNews("xxxxxxxxx");
            expect(actualResponse).toEqual(expectedResponse);
        });

        test("If query string is trump then articles must be 10", async () => {
            const expectedResponse = 2;
            const actualResponse = await newApiAction.getNews("trump");
            expect(actualResponse.totalResults).toEqual(expectedResponse);
        });
    });

    describe("getNewsBySource",  () => {
        test("If category string is xxxxxx then articles must be empty", async () => {
            const expectedResponse = {"sources": [], "status": "ok"};
            const actualResponse = await newApiAction.getNewsBySource("xxxxxxxxx");
            expect(actualResponse).toEqual(expectedResponse);
        });

        test("If category string is technology then articles must be 10", async () => {
            const expectedResponse = 10;
            const actualResponse = await newApiAction.getNewsBySource("technology");
            expect(actualResponse.sources.length).toEqual(expectedResponse);
        });
    });
});