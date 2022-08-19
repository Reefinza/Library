const BOOKS_CATEGORY = 'book_category';
module.exports = (db) => {
    const { sequelize, DataTypes } = db;
    return sequelize.define(BOOKS_CATEGORY, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true
    });
}
