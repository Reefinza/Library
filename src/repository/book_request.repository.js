const Error = require('../utils/handlerError');
module.exports = (dbModel) => { //bookRequestRepository()

    const { bookRequest, Op } = dbModel;
    const create = async (payload) => {
        try {
            const addRes = await bookRequest.create(payload)
            if (addRes.dataValues) {
                return addRes.dataValues;
            } else {
                throw Error(400, 'Failed to create request');
            }
        } catch (err) {
            const message = err.original.detail || err.message;
            throw Error(err.statusCode, message);
        }
    }

    const list = async (keyword = '', page, size, sortBy = 'created_at', sortType = 'desc') => {
        try {
            const offset = size * (page - 1);
            const { count, rows } = await bookRequest.findAndCountAll({
                where: {
                    [Op.or]: [
                        { title: { [Op.iLike]: `%${keyword}%` } },
                        { author: { [Op.iLike]: `%${keyword}%` } },
                        { publicationYearDate: `${keyword}` },
                        //        { status: `${status}`},
                    ]
                },
                offset: offset,
                limit: size,
                order: [
                    [sortBy, sortType]
                ],
            })
            if (count > 0) {
                return { count, rows };
            } else {
                throw Error(404, 'No request found');
            }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

    const getById = async (id, page, size, sortBy = 'created_at', sortType = 'desc') => {
        try {
            const offset = size * (page - 1);
            const { count, rows } = await bookRequest.findAndCountAll({
                where: { userId: id },
                offset: offset,
                limit: size,
                order: [
                    [sortBy, sortType]
                ],
            })
            if (count > 0) {
                return { count, rows };
            } else {
                throw Error(404, 'No request found');
            }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

    const remove = async (id) => {
        try {
            const res = await bookRequest.destroy({ where: { id: id } });

            if (res === 0) {
                throw Error(404, `Request with ID ${id} not found`);
            } else {
                return `Request with ID ${id} has been deleted!`;
            }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

    const update = async (payload) => {
        try {
            const updateRequest = await bookRequest.update(payload, {
                where: { id: payload.id }
            });

            console.log(updateRequest);
            if (updateRequest[0] === 0) {
                throw Error(404, `Request with ID ${payload.id} not found`);
            } else {
                return `Request with ID ${payload.id} has been updated!`;
            }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

    return {
        create, list, getById, remove, update
    }
}