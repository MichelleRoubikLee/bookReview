const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const cors = require('cors');

const books = require('./routes/books');
const users = require('./routes/users');
const reviews = require('./routes/reviews');
const auth = require('./routes/auth');

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api/reviews', reviews);
app.use('/api/auth', auth);

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});