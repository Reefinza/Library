const DbMigration = async (db) => {
    db.squelize.sync()
}
module.exports = DbMigration;