const BOOKS = 'books';
module.exports = (db) => {
    const { sequelize, DataTypes } = db;
    return sequelize.define(BOOKS, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        cover: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        author: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        publicationYearDate: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique:true
        }
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        indexes: [
            {
                unique: true,
                fields: ['title','author', 'publisher', 'publication_year_date']
            }
        ]
    });
}
