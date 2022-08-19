const express = require('express');
const router = express.Router();
const AuthRoute = authController => {
    const { loginAccount } = authController();
    router.get('/', loginAccount);
    return router;
}
module.exports = AuthRoute;
