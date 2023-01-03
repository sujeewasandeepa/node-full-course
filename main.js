const express = require('express');
const EventEmitter = require('events');
const routes = require("./routes/index");

const app = express();
const myEvent = new EventEmitter();

app.set('view engine', 'pug');

myEvent.on('test-event', () => {
    console.log("This event is listening");
})

const PORT = 3001;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})
