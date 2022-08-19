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
            type: DataTypes.STRING(4),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true,
        indexes: [
            {
                unique: true,
                fields: ['title','author', 'publication_year_date', 'user_id']
            }
        ]
    })
}