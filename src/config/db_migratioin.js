const roleSeed = require('../model/seed/role.seed');
const bookSeed = require('../model/seed/book.seed');
const categorySeed = require('../model/seed/category.seed');
const userSeed = require('../model/seed/user.seed');
const bookRequestSeed = require('../model/seed/book_request.seed');
const DbMigration = async (db) => {

    const { sequelize, role,book , category,user,bookRequest} = db;
    sequelize.sync({force:true}).then( async () => {

      await  roleSeed(role);
      await  userSeed(user)

       await categorySeed(category);
       await bookSeed(book);

        await bookRequestSeed(bookRequest)
        console.log("Drop and re-sync db.");


    });
}
module.exports = DbMigration;