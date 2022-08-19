const {passwordUtil} = require("../utils/password.utils");
module.exports = (dbModel) => {
  const { user, role } = dbModel;
  const create = async (payload) => {
    try {
      const password = await passwordUtil(payload.password);
      const result = await user.create({
        username: payload.username,
        password: password,
        email: payload.email,
        roleId: 2
      });
      return result;
    } catch (err) {
      throw Error(err.statusCode, message);
    }
  };

  const list = async () => {
    try {
      return await user.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
    } catch (err) {
      throw Error(err.statusCode, message);
    }
  };

  return {
    create,
    list,
  };
};
