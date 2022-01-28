const connectDB = require('./startup/db');
const express = require('express');
const app = express();

const books = require('./routes/books');
const users = require('./routes/users');

connectDB();

app.use(express.json());
app.use('/api/books', books);
app.use('/api/users', users);

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});