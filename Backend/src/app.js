const express = require("express");
const cookie = require("cookie-parser");

const app = express();

//Middlewares
app.use(express());
app.use(cookie());

//Routers require
const authRouter = require("./routes/auth.routes");

app.use("/api/auth", authRouter);

module.exports = app;
