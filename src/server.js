const express = require("express");

const app = express();

//HTTP Verbs - GET, POST, PUT, DELETE

// const response = await fetch("https://someaddress.com"); //sends GET request

//HTTP Verb GET

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  console.log("/books: ", request.path);
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books/getfirstbook", (request, response) => {
  //get the first book
  console.log("/books/books: ", request.path);
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
});

app.post("/books", (request, response) => {
  console.log("title: ", request.body.title);
  console.log("genre: ", request.body.genre);
  console.log("author: ", request.body.author);

  fakeArr.push(request.body);

  let awsome;
  for (let i = 0; i < fakeArr.length; i++) {
    if (fakeArr[i].title === request.body.title) {
      awsome = "its awsome";
    }
  }
  console.log(awsome);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

app.put("/books", (request, response) => {
  //find book by title (element of fakeArr, element title is same as request.body.title)
  //change (update) author to a new name
});

app.delete("/books", (request, response) => {
  //find book by title (element of fakeArr, element title is same as request.body.title)
  //remove (delete) the element from the array
});

app.listen(5001, () => {
  console.log("server is listening on port 5001");
});
