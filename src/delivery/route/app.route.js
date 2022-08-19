const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

module.exports = (bookRoute, userRoute, bookRequestRoute, authRoute) => {
  router.use("/user", authMiddleware, userRoute);
  router.use("/book", authMiddleware, bookRoute);
  router.use("/book-request", authMiddleware, bookRequestRoute);
  router.use("/auth", authRoute);
  return router;
};
