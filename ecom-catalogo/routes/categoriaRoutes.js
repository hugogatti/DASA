const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/', categoriaController.createCategoria);
router.put('/:ID', categoriaController.updateCategoria);
router.delete('/:ID', categoriaController.deleteCategoria);

module.exports = router;