const jwt = require('jsonwebtoken');
const Response = require('../../utils/response')
const config = require('../../config/config')

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json(Response().errorMessage(res.statusCode, "Unauthorized"))
        }
        const token = authHeader.replace("Bearer ", "")
        if (!token) {
            return res.status(401).json(Response().errorMessage(res.statusCode, "Invalid Token"))
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
        res.status(401).json(Response().errorMessage(res.statusCode, err.message));
    }
}