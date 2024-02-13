const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks } = require("./controllers");

bookRouter.post("/books", addBook);

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.put("/books", (request, response) => {});

bookRouter.delete("/books", (request, response) => {});

module.exports = bookRouter;
