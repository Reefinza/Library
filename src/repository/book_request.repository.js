const Error = require("../utils/handlerErrorRepo");
module.exports = (dbModel) => {
  //bookRequestRepository()

  const { user, book, bookRequest, Op } = dbModel;
  const create = async (payload) => {
    try {
      const addRes = await bookRequest.create(payload);
      if (addRes.dataValues) {
        return addRes.dataValues;
      } else {
        throw Error(400, "Failed to create request");
      }
    } catch (err) {
      const message = err.original.detail || err.message;
      throw Error(err.statusCode, message);
    }
  };

  const list = async (keyword = "", status, page, size, sortBy = "created_at", sortType = "desc") => {
    try {
      let clause = "";
      const offset = size * (page - 1);
      if (!status) {
        clause = {
          [Op.or]: [{ title: { [Op.iLike]: `%${keyword}%` } }, { author: { [Op.iLike]: `%${keyword}%` } }, { publicationYearDate: `${keyword}` }],
        };
      } else if (status == "true" || status == "false") {
        clause = {
          status: `${status}`,
        };
      } else {
        throw Error(400, `Status must be true or false`);
      }
      const { count, rows } = await bookRequest.findAndCountAll({
        where: clause,
        offset: offset,
        limit: size,
        order: [[sortBy, sortType]],
        include: {
          model: user,
          attributes: ["username"],
        },
        attributes: {
          exclude: ["deletedAt", "userId"],
        },
      });
      if (count > 0) {
        return { count, rows };
      } else {
        throw Error(404, "No request found");
      }
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  const requestCheck = async (payload) => {
    const { count } = await book.findAndCountAll({
      where: {
        [Op.and]: [{ title: { [Op.iLike]: payload.title } }, { author: { [Op.iLike]: payload.author } }, { publicationYearDate: payload.publicationYearDate }],
      },
    });
    if (count > 0) {
      throw Error(400, "Book already exist");
    } else {
      return true;
    }
  };

  const getById = async (id, page, size, sortBy = "created_at", sortType = "desc") => {
    try {
      const offset = size * (page - 1);
      const { count, rows } = await bookRequest.findAndCountAll({
        where: { userId: id },
        offset: offset,
        limit: size,
        order: [[sortBy, sortType]],
        include: {
          model: user,
          attributes: ["username"],
        },
        attributes: {
          exclude: ["deletedAt", "userId"],
        },
      });
      if (count > 0) {
        return { count, rows };
      } else {
        throw Error(404, "No request found");
      }
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  const remove = async (id) => {
    try {
      const res = await bookRequest.destroy({ where: { id: id } });

      if (res === 0) {
        throw Error(404, `Request with ID ${id} not found`);
      } else {
        return `Request with ID ${id} has been deleted!`;
      }
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  const update = async (payload) => {
    try {
      const updateRequest = await bookRequest.update(payload, {
        where: { id: payload.id },
      });

      console.log(updateRequest);
      if (updateRequest[0] === 0) {
        throw Error(404, `Request with ID ${payload.id} not found`);
      } else {
        return `Request with ID ${payload.id} has been updated!`;
      }
    } catch (err) {
      throw Error(err.statusCode, err.message);
    }
  };

  return {
    create,
    list,
    getById,
    remove,
    update,
    requestCheck,
  };
};
