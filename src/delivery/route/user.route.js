const express = require("express");
const router = express.Router();
const roleMiddleware = require("../middleware/role.middleware");
const authMiddleware = require("../middleware/auth.middleware");

module.exports = (userController) => {
  const { create, list, findById, update } = userController();
  router.post("/", authMiddleware, roleMiddleware().isAdmin, create);
  router.get("/", authMiddleware, roleMiddleware().isAdmin, list);
  router.get("/:id", authMiddleware, roleMiddleware().isAdmin, findById);
  router.put("/", authMiddleware, roleMiddleware().isAdmin, update);

  return router;
};
