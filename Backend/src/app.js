const express = require("express");
const cookie = require("cookie-parser");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
app.use(cookie());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

//Routers require
const authRouter = require("./routes/auth.routes");
const songRouter = require("./routes/song.routes");

app.use("/api/auth", authRouter);
app.use("/api/songs", songRouter);

module.exports = app;
