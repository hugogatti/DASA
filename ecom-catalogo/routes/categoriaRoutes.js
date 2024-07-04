const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/', categoriaController.createCategoria);
router.put('/:IDCategoria', categoriaController.updateCategoria);
router.delete('/:IDCategoria', categoriaController.deleteCategoria);

module.exports = router;