
module.exports = (dbModel) => { //bookRequestRepository()

    const {customer,Op} = dbModel;
    const create = async (payload) => {
        try {
            return await customer.create(payload)
        } catch (err) {
            return err.message
        }
    }

    const list = async (keyword = '', page, size, sortBy = 'created_at', sortType = 'desc') => {
        try {
            const offset = size * ( page - 1);
            const { count, rows } = await customer.findAndCountAll({
                where: {
                    [Op.or] : [
                        { name: { [Op.iLike] : `%${keyword}%` } },
                        { address: { [Op.iLike] : `%${keyword}%` } },
                        { phone: { [Op.iLike] : `%${keyword}%` } },
                        { email: { [Op.iLike] : `%${keyword}%` } },
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
            if (!customer) return `Customer with value ID ${id} not found!`;
            return customer;
        } catch (err) {
            return err.message
        }
    }

    const remove = async (id) => {
        try {
            const customer = await customer.findByPk(id);
            if (!customer) return `Customer with value ID ${id} not found!`;
            return await customer.destroy({ where: { id: id }});
        } catch (err) {
            return err.message
        }
    }

    const update = async (payload) => {
        try {
            const customer = await customer.findByPk(payload.id);
            if (!customer) return `Customer with value ID ${payload.id} not found!`;
            return await customer.update(payload, {
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