const Response = require("../../utils/response");

module.exports = (userService) => {
  const { registerNewUser, findAllUser, findUserById, updateUser } = userService();

  const create = async (req, res) => {
    try {
      const payload = req.body;
      const user = await registerNewUser(payload);
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

  const list = async (req, res) => {
    try {
      const { keyword, page, size, sortBy, sortType } = req.query;
      const { count, rows } = await findAllUser(keyword, page, size, sortBy, sortType);
      res.json(Response().pagination(res.statusCode, "SUCCESS", rows, keyword, page, count, size, sortBy, sortType));
    } catch (err) {
      res.status(400).json(Response().errorMessage(res.statusCode, err.message));
    }
  };

  const findById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await findUserById(id);
      console.log(user);
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

  const update = async (req, res) => {
    try {
      const payload = req.body;
      const user = await updateUser(payload);

      res.json(Response().successMessage(res.statusCode, "SUCCESS", user));
    } catch (err) {
      res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message));
    }
  };
  return {
    create,
    list,
    findById,
    update,
  };
};
