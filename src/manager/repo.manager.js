const UserRepository = require("../repository/user.repository");
const BookRepository = require("../repository/book.repository");
const BookRequestRepository = require("../repository/book_request.repository");
const FavoriteRepository = require("../repository/favorite.repository");

module.exports = (modelManager) => {
  const dbModel = modelManager();
  // Semua repo

  const userRepo = () => {
    return () => UserRepository(dbModel);
  };

  const bookRepo = () => {
    return () => BookRepository(dbModel);
  };

  const bookRequestRepo = () => {
      return () => BookRequestRepository(dbModel);
    };
  const favoriteRepo = () => {
      return () => FavoriteRepository(dbModel);
    };

  return {
    userRepo,
    bookRepo,
    bookRequestRepo,
    favoriteRepo
  };
};
