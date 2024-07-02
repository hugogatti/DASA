const express = require('express');
const router = express.Router();
const { Categoria } = require('../models');

// Criando as categorias
router.post('/', async (req, res) => {
  const { nomeCategoria, desc, IDProprietario } = req.body;
  const categoria = await Categoria.create({ nomeCategoria, desc, IDProprietario });
  res.status(201).json(categoria);
});

// Atualizar as categorias
router.put('/:ID', async (req, res) => {
  const { ID } = req.params;
  const { nomeCategoria, desc, IDProprietario } = req.body;
  const categoria = await Categoria.update({ nomeCategoria, desc, IDProprietario }, { where: { ID } });
  res.json(categoria);
});

// Excluir as categorias
router.delete('/:ID', async (req, res) => {
  const { ID } = req.params;
  await Categoria.destroy({ where: { ID } });
  res.status(204).end();
});

module.exports = router;