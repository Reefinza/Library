const UserRepository = require("../repository/user.repository");
const BookRepository = require("../repository/book.repository");
// const BookRequestRepository = require("../repository/book_request.repository");

module.exports = (modelManager) => {
  const dbModel = modelManager();
  // Semua repo

  const userRepo = () => {
    return () => UserRepository(dbModel);
  };

  const bookRepo = () => {
    return () => BookRepository(dbModel);
  };

  //   BookRequestRepo = () => {
  //     return () => BookRequestRepository(dbModel);
  //   };

  return {
    userRepo,
    bookRepo,
    // BookRequestRepo
  };
};
