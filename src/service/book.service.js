module.exports = (bookRepo) => {
    const { create, list, getById, remove, update } = bookRepo();
    const addNewBook = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            return err.message
        }
    }
    const findAllBook = async (keyword, page, size, sortBy, sortType) => {
        try {
            if (isNaN(page) || isNaN(size)) {
                page = 1, size = 10
            }
            const { count, rows } = await list(keyword, page, size, sortBy, sortType);
            return { count, rows }
        } catch (err) {
            return err.message
        }
    }

    const findBookById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }

    const removeBook = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message
        }
    }

    const updateBook = async (payload) => {
        try {
            return await update(payload);
        } catch (err) {
            return err.message
        }
    }

    return {
        addNewBook, findAllBook, findBookById, removeBook, updateBook
    }

}
