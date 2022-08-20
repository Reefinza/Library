const Error = require('../utils/handlerError');

module.exports = (modelManager) => { // CustomerRepository()

    const { favorite, book, user, category, Op } = modelManager;

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
            
            const result = await favorite.findAll({
                where: {userId: userId},
                attributes: {
                    exclude: ['deletedAt','userId','bookId']
                },
                include: [
                    
                    {
                        model:user,
                        attributes: ["username","email"]

                    },
                    {
                        model: book,
                        attributes: ["id","title","author","cover","publisher","publicationYearDate", "isbn" ],
                        include: [{
                            model: category,
                            attributes:["id",["name","Category"]]
                        }
                        ]
                    }

                ],
                
            })
            
            if (result.length > 0) {
                return result;
            }else{
                throw Error(404, 'Favorite books not found');
            }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

   
    const remove = async (payload) => {
        try {
           
           const userId = payload.userId;
           const bookId = payload.bookId;
         const res = await favorite.destroy({ 
            where: { 
                [Op.and]:[
                    {userId: userId},
                    {bookId: bookId}
                ]

          } });
          

         
          if (res === 0){
            throw Error(404, `Favorite book with id ${bookId} not found`);
          }else{
            return `Favorite book with value ID ${bookId} has been deleted!`;
          }
        } catch (err) {
            throw Error(err.statusCode, err.message);
        }
    }

    
    return {
        create, list, remove
    }
}
