// imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// variables
const app = express();
const PORT = 1234 || process.env.SERVER_PORT;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("Welcome to my API !"));
app.use("/crud", require("./routes/crud.route"));

// listen
if (process.env.SERVER_PORT) {
    app.listen(PORT, () => console.log(`\n> http://localhost:${PORT}/\n`));
}

module.exports = app;