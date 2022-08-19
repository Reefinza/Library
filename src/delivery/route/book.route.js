const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');
module.exports = (bookController) => {
    const { create, list, findById, update, remove } = bookController();
    router.post('/', create);
    router.get('/', authMiddleware, roleMiddleware().isAdmin, list);
    router.get('/:id', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router;
}
