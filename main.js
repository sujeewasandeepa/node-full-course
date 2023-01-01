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

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
