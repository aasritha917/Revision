const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  publishedYear: { type: Number },
  genre: { type: String, trim: true },
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
