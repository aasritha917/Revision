const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/books', require('./routes/books'));

app.get('/', (req, res) => res.send('Book Library API is running'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
