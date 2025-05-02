const express = require("express");
const app = express();
const path = require("path");
const serverless = require("serverless-http");

app.use(express.static(path.join(__dirname, "public")))

exports.handler = serverless(app);