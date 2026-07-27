const express = require("express");
const cookie = require("cookie-parser");

const app = express();

// *Middlewares
app.use(express());
app.use(cookie());

module.exports = app;
