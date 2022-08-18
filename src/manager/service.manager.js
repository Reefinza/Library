const BookService = require('../service/book.service');
const UserService = require('../service/user.service');
const BookRequestService = require('../service/book_request.service');
module.exports = (repoManager) => {
    const { bookRepo, userRepo,bookRequestRepo } = repoManager();
    // Semua repo
    const bookService = () => {
        return () => CustomerService(bookRepo());
    }

    const userService = () => {
        return () => UserService(userRepo());
    }
    const bookRequestService = () => {
        return () => BookRequestService(bookRequestRepo());
    }

    return {
        bookService, userService, bookRequestService
    }
}
