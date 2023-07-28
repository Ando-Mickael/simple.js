// imports
const express = require("express");
const cors = require("cors");
const { runServer } = require("./config/server");

// variables
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("Welcome to my API !"));
app.use("/crud", require("./routes/crud.route"));

// run server
runServer();

module.exports = app;