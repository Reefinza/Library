const Response = require("../../utils/response");
module.exports = (favoriteService) => {
  const { getFavoriteBook, addFavoriteBook, removeFavoriteBook } = favoriteService();

  const addFavorite = async (req, res) => {
    try {
      const bookId = req.params.book_id;
      const userId = req.user.id;
      const favorite = await addFavoriteBook({ bookId, userId });
      res.json(Response().successMessage(res.statusCode, "SUCCESS", favorite));
    } catch (err) {
      res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message));
    }
  };

  const getUserFavoriteBook = async (req, res) => {
    try {
      const userId = req.user.id;
      const result = await getFavoriteBook(userId);

      res.json(Response().successMessage(res.statusCode, "SUCCESS", result));
    } catch (err) {
      res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message));
    }
  };

  
  const removeFavorite = async (req, res) => {
    try {
      const bookId = req.params.book_id;
      const userId = req.user.id;
      const result = await removeFavoriteBook({bookId,userId});
      res.json(Response().successMessage(res.statusCode, "SUCCESS", result));
    } catch (err) {
      res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message));
    }
  };
  return {
  addFavorite,
  getUserFavoriteBook,
  removeFavorite
  };
};
