const express = require('express');
const router = express.Router();
module.exports = (favoriteController) => {
    const { getUserFavoriteBook, addFavorite, removeFavorite } = favoriteController();

    console.log(favoriteController());
    
    router.get('/', getUserFavoriteBook);
    router.get('/add-favorite/:book_id',  addFavorite);
    router.get('/remove-favorite:book_id', removeFavorite);
 
    return router;
}
