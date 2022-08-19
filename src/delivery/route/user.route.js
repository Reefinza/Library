const express = require("express");
const router = express.Router();
const roleMiddleware = require('../middleware/role.middleware');
module.exports = (userController) => {
  const { create, list, findById, update } = userController();
  router.post("/", roleMiddleware().isAdmin, create);
  router.get("/register", roleMiddleware().isAdmin, create);
  router.get("/", roleMiddleware().isAdmin,list);
  router.get("/:id", roleMiddleware().isAdmin, findById);
  router.put("/", roleMiddleware().isAdmin, update);

  return router;
};
