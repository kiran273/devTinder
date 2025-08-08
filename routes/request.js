const express = require("express");
const { userAuth } = require("../src/middlewares/auth");
const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  res.send(user.firstName + " sent connection request");
});

module.exports = requestRouter;
