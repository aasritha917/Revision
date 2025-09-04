const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.post('/', controller.createBook);

router.get('/', controller.getBooks);

router.patch('/:id', controller.toggleAvailability);

router.delete('/:id', controller.deleteBook);

module.exports = router;
