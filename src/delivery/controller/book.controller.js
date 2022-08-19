const Response = require('../../utils/response');
module.exports = (bookService) => {
    const { addNewBook, findAllBook, findBookById, removeBook, updateBook } = bookService();

    const create = async (req, res) => {
        try {
            const payload = req.body;
            const book = await addNewBook(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', book))
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }

    const list = async (req, res) => {
        try {
            const { keyword, page, size, sortBy, sortType } = req.query
            const { count, rows } = await findAllBook(keyword, page, size, sortBy, sortType);
            
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
            const { id } = req.params;
            const book = await findBookById(id);
            
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', book))
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }

    const update = async (req, res) => {
        try {
            const payload = req.body;
            const book = await updateBook(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', book))
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }

    const remove = async (req, res) => {
        try {
            const { id } = req.params;
            const book = await removeBook(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', book))
        } catch (err) {
            res.status(err.statusCode).json(Response().errorMessage(err.statusCode, err.message))
        }
    }
    return {
        create, list, findById, update, remove
    }
}
