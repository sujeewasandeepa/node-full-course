const express = require('express');
const bookRouter = express.Router();

bookRouter
  .route('/book')
  .get((req, res) => {
    res.send("All books");
  })
  .post((req, res) => {
    res.json({ data: "Book is stored" });
  })

bookRouter.get("/book/:id", (req, res) => {
  res.send(`Single book of ID: ${req.params.id}`);
})

module.exports = bookRouter;