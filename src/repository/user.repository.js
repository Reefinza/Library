const { passwordUtil } = require("../utils/password.utils");
const Error = require("../utils/handlerError");

module.exports = (dbModel) => {
  const { user, role } = dbModel;
  const create = async (payload) => {
    try {
      const password = await passwordUtil(payload.password);

      const result = await user.create({
        username: payload.username,
        password: password,
        email: payload.email,
        roleId: 2,
      });

      if (result.dataValues) {
        return result.dataValues;
      } else {
        throw Error(400, "failed to create user");
      }
    } catch (err) {
      const message = err.original.detail || err.message;
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

  const getById = async (id) => {
    try {
      const res = await user.findByPk(id);
      if (res) {
        return res;
      } else {
        throw Error(404, `User with id ${id} not found`);
      }
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  const update = async (payload) => {
    try {
      const updateUser = await user.update(payload, {
        where: { id: payload.id },
      });

      //   console.log(updateUser);
      if (updateUser[0] === 0) {
        throw Error(404, `User with id ${payload.id} not found`);
      } else {
        return `User with value ID ${payload.id} has been updated!`;
      }
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  return {
    create,
    list,
    getById,
    update,
  };
};
