const Response = require('../../utils/response');
module.exports = (bookRequestService) => {
    const { createNewBookRequest, findAllBookRequest, findBookRequestById, removeBookRequest, updateBookRequest } = bookRequestService();

    const create = async (req, res) => {
        try {
            const payload = req.body;
            const bookRequest = await createNewBookRequest(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', bookRequest))
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }

    const list = async (req, res) => {
        try {
            const { keyword, page, size, sortBy, sortType } = req.query
            const { count, rows } = await findAllBookRequest(keyword, page, size, sortBy, sortType);
            res.json(Response().pagination(
                res.statusCode, 'SUCCESS', rows,
                keyword, page, count, size, sortBy, sortType
            ));
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }

    const findById = async (req, res) => {
        try {
            const { id } = req.user.id;
            const { page, size, sortBy, sortType } = req.query
            const { count, rows } = await findBookRequestById(id, page, size, sortBy, sortType);
            res.json(Response().pagination(
                res.statusCode, 'SUCCESS', rows,
                keyword, page, count, size, sortBy, sortType
            ));
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }

    const update = async (req, res) => {
        try {
            const payload = req.body;
            const bookRequest = await updateBookRequest(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', bookRequest))
        } catch (err) {
            console.log(err)
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }

    const remove = async (req, res) => {
        try {
            const { id } = req.params;
            const bookRequest = await removeBookRequest(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', bookRequest))
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }
    return {
        create, list, findById, update, remove
    }
}
