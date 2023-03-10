const express = require('express');
const router = express.Router();
const bookRouter = require('./book');
const authRouter = require('./auth');
const path = require('path');

router.get('/', (req, res) => {
  // myEvent.emit('test-event');
  // res.send("Hello world!");
  // res.render(path.join(__dirname, '/../pages/home.html'), { name: 'Sujeewa' });
  res.render('index', {name: "Sujeewa"});
})


router.post("/", (req, res) => {
  res.json({ name: "Sujeewa Sandeepa" });
})

// router.use(bookRouter);
// can define this like this, and remove '/book/' parts from the book.js file
router.use('/book', bookRouter);
router.use('/auth', authRouter);

router.all('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../pages/404.html'));
})



module.exports = router;