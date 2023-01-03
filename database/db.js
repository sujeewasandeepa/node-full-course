const { MongoClient } = require('mongodb');

// connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// database name
const dbName = 'nodejs_course';

async function connect() {
    await client.connect();
    const db = client.db(dbName);
    return db;
}

module.exports = connect;