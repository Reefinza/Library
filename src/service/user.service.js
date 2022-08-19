module.exports = (userRepo) => {
  const { create, list, getById, update, getUserByUsernamePassword } = userRepo();

  const registerNewUser = async (payload) => {
    try {
      return await create(payload);
    } catch (err) {
      throw err;
    }
  };

  const findAllUser = async () => {
    try {
      return await list();
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
