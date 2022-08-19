const Response = require("../../utils/response");

module.exports = (authService) => {
  const { login, register } = authService();
  const loginAccount = async (req, res) => {
    const payload = req.body;
    const token = await login(payload);
    res.status(201).json({ token: token });
  };
  const registerAccount = async (req, res) => {
    try {
      const payload = req.body;
      const user = await register(payload);
      // console.log(user);
      const data = {
        username: user.username,
        email: user.email,
        role_id: user.roleId,
      };
      res.json(Response().successMessage(res.statusCode, "SUCCESS", data));
    } catch (err) {
      console.log(err);
      res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message));
    }
  };
  return {
    loginAccount,
    registerAccount,
  };
};
