// const { MongoClient } = require('mongodb');

// // connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // database name
// const dbName = 'nodejs_course';

// async function connect() {
//     await client.connect();
//     const db = client.db(dbName);
//     return db;
// }

// module.exports = connect;

const {default: mongoose} = require("mongoose");

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/nodejs_course');
}

module.exports = connectDB;