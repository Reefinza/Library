const express = require('express');
const router = express.Router();
const roleMiddleware = require('../middleware/role.middleware');
module.exports = (bookRequestController) => {
    const {  create, list, findById, update, remove } = bookRequestController();
    router.post('/', create);
    router.get('/', roleMiddleware().isAdmin, list);
    router.get('/check/', findById);
    router.put('/', roleMiddleware().isAdmin, update);
    router.delete('/:id', roleMiddleware().isAdmin, remove);
    return router;
}