module.exports = (bookRequestRepo) => {
    const {  create, list, getById, remove, update } = bookRequestRepo();
    const createNewBookRequest = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            return err.message
        }
    }

    const findAllBookRequest = async (keyword, page, size, sortBy, sortType) => {
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

    const findBookRequestById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }

    const removeBookRequest = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message
        }
    }

    const updateBookRequest = async (payload) => {
        try {
            return await update(payload);
        } catch (err) {
            return err.message
        }
    }

    return {
        createNewBookRequest, findAllBookRequest, findBookRequestById, removeBookRequest, updateBookRequest
    }

}
