const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode')
const config = require('../../config/config')

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                "message": "Unauthorized"
            })
        }
        const token = authHeader.replace("Bearer ", "")
        console.log('token', token)
        if (!token) {
            return res.status(401).json({
                "message": "Token incorrect!"
            })
        }
        const payload = jwt.decode(token, config().TokenSecret);

        jwt.verify(token, config().TokenSecret);

        req.user = {
            id: payload.id,
            username: payload.username,
            roleId : payload.role_id
        }
        next();
    } catch (err) {
        res.status(401).json({
            "message": err.message
        })
    }
}