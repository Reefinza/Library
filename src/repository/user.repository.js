module.exports = (dbModel) => {
  const { user, role } = dbModel;
  const create = async (payload) => {
    try {
      const password = await passwordUtil(payload.password);
      const result = await user.create({
        username: payload.username,
        password: password,
        email: payload.email,
        role_id: 2,
      });
      return result;
    } catch (err) {
      return err.message;
    }
  };

  const list = async () => {
    try {
      return await user.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
    } catch (error) {
      return error.message;
    }
  };

  return {
    create,
    list,
  };
};
