const express = require('express');
const router = express.Router();

module.exports = (/*bookRoute, userRoute, bookRequestRoute*/) => {
    router.use('/user', (req, res) => {
        res.json({
           name : "user" 
        })
    }/*userRoute*/);
    router.use('/book', (req, res) => {
        res.json({
            name: "book"
        })
    }/*bookRoute*/);
    router.use('/book-request', (req, res) => {
        res.json({
            name: "book-request"
        })
    }/*bookRequestRoute*/)
    return router;
}
