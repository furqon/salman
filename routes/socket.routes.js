module.exports = app => {
  const socket = require("../controllers/socket.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.get("/", socket.test);

  app.use('/api/socket', router);
};