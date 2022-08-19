const express = require("express");
const router = express.Router();
module.exports = (userController) => {
  const { create, list, findById, update } = userController();
  router.post("/", create);
  router.get("/register", create);
  router.get("/", list);
  router.get("/:id", findById);
  router.put("/", update);

  return router;
};
