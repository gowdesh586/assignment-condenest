require("dotenv").config();
const express = require("express");
const { api } = require("./rest/route");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
console.log(process.env.NEWS_API_KEY);

const app = express();
app.use(cors());
app.use(api);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server is ready accept request on :${port} launch:`);
});