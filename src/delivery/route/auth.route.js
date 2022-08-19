const express = require("express");
const router = express.Router();
module.exports = (authController) => {
  const { loginAccount, registerAccount } = authController();
  router.get("/login", loginAccount);
  router.post("/register", registerAccount);
  return router;
};
