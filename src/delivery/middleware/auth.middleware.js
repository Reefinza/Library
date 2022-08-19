const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode')
const config = require('../../configuration/configuration')

module.exports = (req, res, next) => {

    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                "message": "Unauthorized"
            })
        }
        const token = authHeader.replace("Bearer ", "")

        if (!token) {
            return res.status(401).json({
                "message": "Token incorrect!"
            })
        }

        const payload = jwt_decode(token)
        jwt.verify(token, config().TSecret);
        req.role_id = payload.role_id;
        next();
    } catch (err) {
        res.status(401).json({
            "message": err.message
        })
    }
}