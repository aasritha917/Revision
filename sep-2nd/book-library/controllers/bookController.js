const Book = require('../models/Book');
const mongoose = require('mongoose');

exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre, available } = req.body;

    if (!title || !author) {
      return res.status(400).json({ message: 'title and author are required.' });
    }

    const book = await Book.create({ title, author, publishedYear, genre, available });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    let { page = 1, limit = 10, author, available } = req.query;
    page = Math.max(1, parseInt(page));
    limit = Math.max(1, parseInt(limit));

    const filter = {};

    if (author) {
   
      filter.author = { $regex: author, $options: 'i' };
    }
    if (available !== undefined) {
      if (available === 'true' || available === 'false') {
        filter.available = (available === 'true');
      }
    }

    const totalCount = await Book.countDocuments(filter);
    const totalPages = Math.ceil(totalCount / limit);
    const books = await Book.find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      totalCount,
      totalPages,
      currentPage: page,
      perPage: limit,
      data: books
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.toggleAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: 'Invalid book id' });

    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    book.available = !book.available;
    await book.save();

    res.json({ message: 'Availability updated', book });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: 'Invalid book id' });

    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Book not found' });

    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
