const express = require('express');
const router = express.Router();
module.exports = (bookRequestController) => {
    const {  create, list, findById, update, remove } = bookRequestController();
    router.post('/', create);
    router.get('/', list);
    router.get('/check/', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router;
}