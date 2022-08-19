const roleSeed = require('../model/seed/role.seed');
const bookSeed = require('../model/seed/book.seed');
const categorySeed = require('../model/seed/category.seed');
const userSeed = require('../model/seed/user.seed');
const DbMigration = async (db) => {

    const { sequelize, role,book , category,user} = db;
    sequelize.sync({force:true}).then(() => {

        roleSeed(role);
        userSeed(user)

        categorySeed(category);
        bookSeed(book);
        console.log("Drop and re-sync db.");


    });
}
module.exports = DbMigration;