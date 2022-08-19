const roleSeed = require('../model/seed/role.seed');
const bookSeed = require('../model/seed/book.seed');
const categorySeed = require('../model/seed/category.seed');
const DbMigration = async (db) => {

    const { sequelize, role,book , category} = db;
    sequelize.sync({force:true}).then(() => {

        roleSeed(role);
        bookSeed(book);
        categorySeed(category);
        console.log("Drop and re-sync db.");


    });
}
module.exports = DbMigration;