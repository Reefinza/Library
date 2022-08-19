const Error = require('../utils/handlerError');

module.exports = (bookRepo) => {
    const { create, list, getById, remove, update } = bookRepo();
    const addNewBook = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            throw err
        }
    }
    const findAllBook = async (keyword, page, size, sortBy, sortType) => {
        try {
            if (isNaN(page) || isNaN(size)) {
                page = 1, size = 10
            }
            const { count, rows } = await list(keyword, page, size, sortBy, sortType);
            // console.log(rows);
            return { count, rows }
        } catch (err) {
            throw err
        }
    }

    const findBookById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            throw err
        }
    }

    const removeBook = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            throw err
        }
    }

    const updateBook = async (payload) => {
        try {
            return await update(payload);
        } catch (err) {
            throw err
        }
    }

    return {
        addNewBook, findAllBook, findBookById, removeBook, updateBook
    }

}
