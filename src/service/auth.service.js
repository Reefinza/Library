const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Error = require("../utils/handlerErrorService");
const { Register, Login } = require("../utils/validate");

module.exports = (userService) => {
  const { findUserByUsernamePassword, registerNewUser } = userService();
  const login = async (payload) => {
    try {
      const validPayload = await Login.validateAsync(payload);

      const user = await findUserByUsernamePassword(validPayload.username, validPayload.password);

      if (!user) return `User and password doesn't match`;

      // Generate Token
      const { TokenSecret, TokenExpiration, TokenAlgorithm } = config();

      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          role_id: user.roleId,
        },
        TokenSecret,
        { expiresIn: TokenExpiration /*, algorithm: TOKEN_ALGORITHM*/ },
        null
      );
      return token;
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  const register = async (payload) => {
    try {
      const validPayload = await Register.validateAsync(payload);
      return await registerNewUser(validPayload);
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  // const logout = () => { }
  // const forgotPassword = () => { }
  return {
    login,
    register,
  };
};
