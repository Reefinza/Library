const Joi = require("joi");

const Register = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const UpdateUser = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  id: Joi.number().required(),
});

const addBook = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  cover: Joi.string().alphanum(),
  author: Joi.string().min(3).max(50).required(),
  publisher: Joi.string().min(3).max(50).required(),
  publicationYearDate: Joi.string().required(),
  isbn: Joi.string().min(3).max(50).required(),
  bookCategoryId: Joi.number().required(),
});

const UpdateBook = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  cover: Joi.string().alphanum(),
  author: Joi.string().min(3).max(50).required(),
  publisher: Joi.string().min(3).max(50).required(),
  publicationYearDate: Joi.string().required(),
  isbn: Joi.string().min(3).max(50).required(),
  bookCategoryId: Joi.number().required(),
  id: Joi.number().required(),
});

const addBookRequest = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  author: Joi.string().min(3).max(50).required(),
  publicationYearDate: Joi.string().min(4).required(),
  userId: Joi.number().required(),
});

const Login = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(3).max(50).required(),
});

module.exports = { Register, addBook, UpdateUser, UpdateBook, addBookRequest, Login };
