const express = require('express');
const router = express.Router();
const bookRouter = require('./book');

router.get('/', (req, res) => {
  // myEvent.emit('test-event');
  res.send("Hello world!");
})

// let's try a dynamic route
// app.get("/book", (req, res) => {
//     res.send("All books");
// })
//
// app.post("/book", (req, res) => {
//     res.json({ data: "book is stored" });
// })
//
// We can chain these functions like this,

router.post("/", (req, res) => {
  res.json({ name: "Sujeewa Sandeepa" });
})

router.use(bookRouter);

router.all('/*', (req, res) => {
  res.send("Page not found!");
})



module.exports = router;