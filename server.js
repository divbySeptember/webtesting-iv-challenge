const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// import routes
const userRoutes = require("./users/routes.js");
const animalRoutes = require("./animals/routes.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// setup routes
server.use("/api/users", userRoutes);
server.use("/api/animals", animalRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ serverStatus: "OK" });
});

module.exports = server;
