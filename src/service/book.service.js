const Error = require('../utils/handlerErrorService');
const {addBook} = require('../utils/validate');

module.exports = (bookRepo) => {
  const { create, list, getById, remove, update } = bookRepo();
    const addNewBook = async (payload) => {
        try {
            const validPayload = await addBook.validateAsync(payload);
            return await create(validPayload);
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }
    const findAllBook = async (keyword, page, size, sortBy, sortType, bookCategory) => {
        try {
            if (isNaN(page) || isNaN(size)) {
                page = 1, size = 10
            }
            const { count, rows } = await list(keyword, page, size, sortBy, sortType, bookCategory);

            return { count, rows }
        } catch (err) {
            throw err
        }
    }

  const findBookById = async (id) => {
    try {
      return await getById(id);
    } catch (err) {
      throw err;
    }
  };

  const removeBook = async (id) => {
    try {
      return await remove(id);
    } catch (err) {
      throw err;
    }
  };

  const updateBook = async (payload) => {
    try {
      return await update(payload);
    } catch (err) {
      throw err;
    }
  };

  return {
    addNewBook,
    findAllBook,
    findBookById,
    removeBook,
    updateBook,
  };
};
