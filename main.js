const express = require('express');
const EventEmitter = require('events');
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const connectDB = require('./database/db');
const test = require('./middleware/test');

const app = express();
const myEvent = new EventEmitter();

app.set('view engine', 'pug');

app.use(test);

myEvent.on('test-event', () => {
    console.log("This event is listening");
})

const PORT = 3001;

app.use(bodyParser.json())
app.use(routes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at ${PORT}`);
    })
})

