const express = require("express");
const bookRouter = express.Router();
const BookController = require("../controllers/BookController");

bookRouter
  .route("/")
  .get(BookController.index)
  .post(BookController.store)

bookRouter
  .route("/:id")
  .get(BookController.show)
  .patch(BookController.change)
  .delete(BookController.remove)

module.exports = bookRouter;
