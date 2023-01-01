const express = require('express');
const EventEmitter = require('events');

const app = express();
const myEvent = new EventEmitter();

myEvent.on('test-event', () => {
    console.log("This event is listening");
})

const PORT = 3001;

app.get('/', (req, res) => {
    myEvent.emit('test-event');
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
app
    .route('/book')
    .get((req, res) => {
        res.send("All books");
    })
    .post((req, res) => {
        res.json({ data: "Book is stored" });
    })

app.get("/book/:id", (req, res) => {
    res.send(`Single book of ID: ${req.params.id}`);
})

app.post("/", (req, res) => {
    res.json({ name: "Sujeewa Sandeepa" });
})

app.all('/*', (req, res) => {
    res.send("Page not found!");
})

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
