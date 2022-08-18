const express = require('express');
const router = express.Router();
module.exports = (bookController) => {
    const { create, list, findById, update, remove } = bookController();
    router.post('/', create);
    router.get('/', list);
    router.get('/:id', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router;
}
