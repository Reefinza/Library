const DbMigration = async (db) => {
    db.squelize.sync({force: true});
}
module.exports = DbMigration;