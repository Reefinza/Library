const BookService = require("../service/book.service");
const UserService = require("../service/user.service");
const BookRequestService = require('../service/book_request.service');
const AuthService = require('../service/auth.service');
const FavoriteService = require('../service/favorite.service');
module.exports = (repoManager) => {
  const { bookRepo, userRepo, bookRequestRepo, favoriteRepo } = repoManager();
  // Semua repo
  const bookService = () => {
    return () => BookService(bookRepo());
  };

  const userService = () => {
    return () => UserService(userRepo());
  };
  const bookRequestService = () => {
      return () => BookRequestService(bookRequestRepo());
  }
  const authService = () => {
    return () => AuthService(userService());
  }
  const favoriteService = () => {
    return () => FavoriteService(favoriteRepo());
  }

  return {
    bookService,
    userService,
    bookRequestService,
    authService,
    favoriteService
  };
};
