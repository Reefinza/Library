const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

module.exports = (bookRoute, userRoute, bookRequestRoute, authRoute, favoriteRoute) => {
  router.use("/user", userRoute);
  router.use("/book", authMiddleware, bookRoute);
  router.use("/book-request", authMiddleware, bookRequestRoute);
  router.use("/auth", authRoute);
  router.use("/favorite", authMiddleware, favoriteRoute);
  return router;
};
