const User = require('../model/user.model');
const Book = require('../model/book.model');
const BookRequest = require('../model/books_request.model');
const Category = require('../model/book_category.model');
const Role = require('../model/role.model')




module.exports = (infraManager) => {

    const {initDb } = infraManager;
    const db = initDb();

    const user = User(db);
    const book = Book(db);
    const bookRequest = BookRequest(db);
    const category = Category(db);
    const role = Role(db)

    
    
    role.hasMany(user);
    user.belongsTo(user)
    user.hasMany(bookRequest);
    bookRequest.belongsTo(user);
    
    category.hasMany(book);
    book.belongsTo(category);


    const modelManager = {
        squelize: db.sequelize,
        Op : db.Op,
        book,
        user,
        bookRequest,
        category,
        role
    }   
    return modelManager
    
}