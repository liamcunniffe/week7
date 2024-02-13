const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook } = require("./controllers");

bookRouter.post("/books", addBook);

module.exports = bookRouter;
