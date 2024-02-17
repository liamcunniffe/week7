const Book = require("./model");

const addBook = async (request, response) => {
  console.log("request.body: ", request.body);
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  response.send({ message: "book added", book: book });
};

const getAllBooks = async (request, response) => {
  const books = await Book.find({});
  console.log("books: ", books);
  response.send({ message: "all the books", books: books });
};

const newAuthor = (request, response) => {
  console.log(request.body);
  return response.json({
    message: "updated the author",
  });
};

const removeBook = (request, response) => {
  console.log(request.params);
  return response.json({
    message: "book deleted",
  });
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  newAuthor: newAuthor,
  removeBook: removeBook,
};
