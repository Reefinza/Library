const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (userService) => {
    const { findUserByUsernamePassword } = userService();
    const login = async (payload) => {
        const user =
            await findUserByUsernamePassword(
                payload.username,
                payload.password
            );
        
        if (!user) return `User and password doesn't match`;

        // Generate Token 
        const { TokenSecret, TokenExpiration, TokenAlgorithm } = config();

        const token = jwt.sign({
            id: user.id,
            username: user.username,
            password: user.password,
            role_id: user.roleId
        }, TokenSecret, { expiresIn: TokenExpiration/*, algorithm: TOKEN_ALGORITHM*/ }, null);
        return token;
    }

    // const logout = () => { }
    // const forgotPassword = () => { }
    return {
        login
    }

}
