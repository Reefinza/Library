const express = require("express");
const router = express.Router();

module.exports = (bookRoute, userRoute, bookRequestRoute) => {
  router.use("/user", userRoute);
  router.use("/book", bookRoute);
  router.use("/book-request", bookRequestRoute);
  return router;
};
