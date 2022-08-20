const express = require('express');
const router = express.Router();
module.exports = (favoriteController) => {
    const { getUserFavoriteBook, addFavorite, removeFavorite } = favoriteController();
    
    router.get('/', getUserFavoriteBook);
    router.get('/add/:book_id',  addFavorite);
    router.get('/remove/:book_id', removeFavorite);
 
    return router;
}
