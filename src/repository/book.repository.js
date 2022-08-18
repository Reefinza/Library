module.exports = (modelManager) => { // CustomerRepository()

    const { book, Op } = modelManager;
    const create = async (payload) => {
        try {
            return await book.create(payload)
        } catch (err) {
            return err
        }
    }

    const list = async (keyword = '', page, size, sortBy = 'created_at', sortType = 'desc') => {
        try {
            const offset = size * (page - 1);
            const { count, rows } = await book.findAndCountAll({
                where: {
                    [Op.or]: [
                        { title: { [Op.iLike]: `%${keyword}%` } },
                        { author: { [Op.iLike]: `%${keyword}%` } },
                        { category_id: { [Op.iLike]: `%${keyword}%` } },
                        { isbn: { [Op.iLike]: `%${keyword}%` } },
                    ]
                },
                offset: offset,
                limit: size,
                order: [
                    [sortBy, sortType]
                ],
            })
            return { count, rows }
        } catch (err) {
            return err.message
        }
    }

    const getById = async (id) => {
        try {
            const book = await book.findByPk(id);
            if (!book) return `book with value ID ${id} not found!`;
            return book;
        } catch (err) {
            return err.message
        }
    }

    const remove = async (id) => {
        try {
            const book = await book.findByPk(id);
            if (!book) return `book with value ID ${id} not found!`;
            return await book.destroy({ where: { id: id } });
        } catch (err) {
            return err.message
        }
    }

    const update = async (payload) => {
        try {
            const book = await book.findByPk(payload.id);
            if (!book) return `book with value ID ${payload.id} not found!`;
            return await book.update(payload, {
                where: { id: payload.id }
            });
        } catch (err) {
            return err.message
        }
    }

    return {
        create, list, getById, remove, update
    }
}
