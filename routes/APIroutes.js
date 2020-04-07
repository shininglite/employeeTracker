//require DB class
// const path = require('path');
const DB = require('../DB/index.js');


module.exports = function(app) {

  app.get("/api/books", (req, res) => {
    DB.getAllBooks()
    .then(results => res.json(results))
    .catch(error => console.log(error))
  })

  app.get("/api/book/:title", (req, res) => {
    DB.getOneBook(req.params.title)
    .then(results => res.json(results))
    .catch(error => console.log(error))
  })

  app.get("/api/notes/:bookId", (req, res) => {
    DB.getBookNotes(req.params.bookId)
    .then(results => res.json(results))
    .catch(error => console.log(error))
  })

  app.post("/api/addbook", (req, res) => {
    DB.addBook(req.body)
    .then(results => res.json(results))
    .catch(error => console.log(error))
  })

  app.post("/api/addbooknote", (req, res) => {
    DB.addBookNote(req.body)
    .then(results => res.json(results))
    .catch(error => console.log(error))
  })

  app.delete("/api/deletenote/:note", (req, res) => {
    DB.deleteNote(req.params.note)
    .then(results => res.json(results))
    .catch(error => console.log(error))
  })

};
