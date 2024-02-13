const Book = require("./model");

const addBook = async (request, response) => {
  try {
    console.log("request.body: ", request.body);
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });
    console.log("book: ", book);
    response.send({ message: "success book created", book: book });
  } catch (error) {
    response.send({ message: "its gone pete tong", error: error });
  }
};

module.exports = {
  addBook: addBook,
};
