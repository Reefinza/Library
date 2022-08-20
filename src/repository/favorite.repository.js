const Error = require('../utils/handlerError');

module.exports = (modelManager) => { // CustomerRepository()

    const { favorite, book, user, Op } = modelManager;

    const create = async (payload) => {
        try {
            const addRes = await favorite.create(payload);
            
        if (addRes.dataValues) {
            return addRes.dataValues;
        }else{
            throw Error(400, 'Failed to add Favorite');
        }
        } catch (err) {
            const message = err.original.detail || err.message;
            throw Error(err.statusCode, message);
        }
    }

    const list = async (userId) => {
        try {
            
            const result = await book.findAll({
                where: {userId: userId},
                
            })
            if (result > 0) {
                return result;
            }else{
                throw Error(404, 'Books not found');
            }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

   
    const remove = async (payload) => {
        try {
           const userId = payload.userId;
           const bookId = payload.bookId;
         const res = await book.destroy({ 
            where: { 
                [Op.and]:[
                    {userId: userId},
                    {bookId: bookId}
                ]

          } });
         
          if (res === 0){
            throw Error(404, `Favorite book with id ${id} not found`);
          }else{
            return `Favorite book with value ID ${id} has been deleted!`;
          }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

    
    return {
        create, list, remove
    }
}
