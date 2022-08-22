const { passwordUtil, passwordCompare } = require("../utils/password.utils");
const Error = require("../utils/handlerErrorRepo");

module.exports = (dbModel) => {
  const { user, Op } = dbModel;
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

  const list = async (keyword = "", page, size, sortBy = "created_at", sortType = "desc") => {
    try {
      const offset = size * (page - 1);
      const { count, rows } = await user.findAndCountAll({
        where: {
          [Op.or]: [{ username: { [Op.iLike]: `%${keyword}%` } }, { email: { [Op.iLike]: `%${keyword}%` } }],
        },
        attributes: {
          exclude: ["password"],
        },
        offset: offset,
        limit: size,
        order: [[sortBy, sortType]],
      });
      if (count > 0) {
        return { count, rows };
      } else {
        throw Error(404, "User not found");
      }
    } catch (err) {
      // console.log(err.message);
      throw Error(err.statusCode, err.message);
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

  const getUserByUsernamePassword = async (username, password) => {
    try {
      const result = await user.findAll({
        where: { username: username },
      });
      if (result.length === 0) {
        return null;
      }
      const userData = result[0].dataValues;
      const validPassword = await passwordCompare(password, userData.password);
      if (!validPassword) {
        return null;
      }
      return {
        id: userData.id,
        username: userData.username,
        password: userData.password,
        roleId: userData.roleId,
      };
    } catch (err) {
      throw err.message;
    }
  };

  return {
    create,
    list,
    getById,
    update,
    getUserByUsernamePassword,
  };
};
