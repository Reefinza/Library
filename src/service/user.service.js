const {Register} = require('../utils/validate');
const Error = require('../utils/handlerErrorService');
module.exports = (userRepo) => {
  const { create, list, getById, update, getUserByUsernamePassword } = userRepo();

  const registerNewUser = async (payload) => {
    try {
      const validPayload = await Register.validateAsync(payload);
      return await create(validPayload);
    } catch (err) {
      
   
     
      throw Error(err.statusCode, err.message);
    }
  };

  const findAllUser = async (keyword, page, size, sortBy, sortType) => {
    try {
      if (isNaN(page) || isNaN(size)) {
        (page = 1), (size = 10);
      }
      const { count, rows } = await list(keyword, page, size, sortBy, sortType);
      return { count, rows };
    } catch (err) {
      throw err;
    }
  };

  const findUserById = async (id) => {
    try {
      return await getById(id);
    } catch (err) {
      throw err;
    }
  };

  const updateUser = async (payload) => {
    try {
      return await update(payload);
    } catch (err) {
      throw err;
    }
  };
  const findUserByUsernamePassword = async (username, password) => {
    try {
      return await getUserByUsernamePassword(username, password);
    } catch (err) {
      throw err.message;
    }
  };

  return {
    registerNewUser,
    findAllUser,
    findUserById,
    updateUser,
    findUserByUsernamePassword,
  };
};
