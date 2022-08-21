
const Joi = require('joi');


const Register = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});
const addBook = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    cover: Joi.string().alphanum(),
    author: Joi.string().min(3).max(50).required(),
    publisher: Joi.string().min(3).max(50).required(),
    publicationYearDate: Joi.string().required(),
    isbn: Joi.string().min(3).max(50).required(),
    bookCategoryId: Joi.number().required()
});

module.exports = {Register, addBook};