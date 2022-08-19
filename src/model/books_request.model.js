const BOOKS_REQUEST = 'book_request';
module.exports = (db) => {
    const { sequelize, DataTypes } = db;

    return sequelize.define(BOOKS_REQUEST, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        publicationYearDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true
    })
}