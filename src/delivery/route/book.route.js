const express = require('express');
const router = express.Router();
const roleMiddleware = require('../middleware/role.middleware');
module.exports = (bookController) => {
    const { create, list, findById, update, remove } = bookController();
    router.post('/', roleMiddleware().isAdmin, create);
    router.get('/', list);
    router.get('/:id', roleMiddleware().isAdmin, findById);
    router.put('/', roleMiddleware().isAdmin, update);
    router.delete('/:id', roleMiddleware().isAdmin, remove);
    return router;
}
