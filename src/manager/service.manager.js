const BookService = require("../service/book.service");
const UserService = require("../service/user.service");
const BookRequestService = require('../service/book_request.service');
const AuthService = require('../service/auth.service');
module.exports = (repoManager) => {
  const { bookRepo, userRepo, bookRequestRepo } = repoManager();
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

  return {
    bookService,
    userService,
    bookRequestService,
    authService
  };
};
