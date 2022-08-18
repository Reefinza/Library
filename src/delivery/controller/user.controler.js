module.exports = (userService) => {
  const { registerNewUser, findAllUser } = userService;

  const create = async (req, res) => {
    try {
      const payload = req.body;
      const user = registerNewUser(payload);
      res.json(Response().successMessage(res.statusCode, "SUCCESS", user));
    } catch (error) {
      res.status(400).json(Response().errorMessage(res.statusCode, err.message));
    }
  };

  const list = async (req, res) => {
    try {
      const users = await findAllUser();
      res.json(Response().successMessage(res.statusCode, "SUCCESS", users));
    } catch (error) {
      res.status(400).json(Response().errorMessage(res.statusCode, err.message));
    }
  };
  return {
    create,
    list,
  };
};
