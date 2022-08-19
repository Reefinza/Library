module.exports = (bookRequestRepo) => {
    const { create, list, getById, remove, update } = bookRequestRepo();
    const createNewBookRequest = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            throw err
        }
    }

    const findAllBookRequest = async (keyword, status, page, size, sortBy, sortType) => {
        try {
            if (isNaN(page) || isNaN(size)) {
                page = 1, size = 10
            }
            const { count, rows } = await list(keyword, status, page, size, sortBy, sortType);
            return { count, rows }
        } catch (err) {
            throw err
        }
    }

    const findBookRequestById = async (id, page, size, sortBy, sortType) => {
        try {
            if (isNaN(page) || isNaN(size)) {
                page = 1, size = 10
            }
            console.log(status)
            return await getById(id, page, size, sortBy, sortType);
        } catch (err) {
            throw err
        }
    }
    const removeBookRequest = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            throw err
        }
    }

    const updateBookRequest = async (payload) => {
        try {
            return await update(payload);
        } catch (err) {
            throw err
        }
    }

    return {
        createNewBookRequest, findAllBookRequest, findBookRequestById, removeBookRequest, updateBookRequest
    }

}
