module.exports = app => {
  const auths = require("../controllers/auth.controller.js");

  var router = require("express").Router();

  // Create a new auth
  router.post("/", auths.login);

  app.use('/auth', router);
};