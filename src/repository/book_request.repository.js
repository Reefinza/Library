module.exports = (dbModel) => { //bookRequestRepository()

    const {bookRequest,Op} = dbModel;
    const create = async (payload) => {
        try {
            return await bookRequest.create(payload)
        } catch (err) {
            return err.message
        }
    }

    const list = async (keyword = '', page, size, sortBy = 'created_at', sortType = 'desc') => {
        try {
            const offset = size * ( page - 1);
            const { count, rows } = await bookRequest.findAndCountAll({
                where: {
                    [Op.or] : [
                        { title: { [Op.iLike] : `%${keyword}%` } },
                        { author: { [Op.iLike] : `%${keyword}%` } },
                        { publicationYearDate: `${keyword}` },
                        { status: `${keyword}` },
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
            const customer = await customer.findByPk(id);
            if (!customer) return `Request with ID ${id} not found!`;
            return customer;
        } catch (err) {
            return err.message
        }
    }

    const remove = async (id) => {
        try {
            const bookRequest = await bookRequest.findByPk(id);
            if (!bookRequest) return `Book request ID ${id} not found!`;
            return await bookRequest.destroy({ where: { id: id }});
        } catch (err) {
            return err.message
        }
    }

    const update = async (payload) => {
        try {
            const bookRequest = await bookRequest.findByPk(payload.id);
            if (!bookRequest) return `Book Request ID ${payload.id} not found!`;
            return await bookRequest.update(payload, {
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