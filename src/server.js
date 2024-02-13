require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

app.get("/books", async (request, response) => {
  const books = await Book.find({});

  await logTypeOfResult(books);

  response.send({ message: "success all the books", books: books });
});

app.put("/books", (request, response) => {});

app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log("server is listening on port 5001");
});
