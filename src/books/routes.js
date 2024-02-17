const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  newAuthor,
  removeBook,
} = require("./controllers");

bookRouter.post("/books", addBook);

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.put("/books", newAuthor);

bookRouter.delete("/books", removeBook);

module.exports = bookRouter;
