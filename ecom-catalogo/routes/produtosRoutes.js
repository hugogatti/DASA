const express = require('express');
const router = express.Router();
const { Produtos } = require('../models');

// Criando um produto no BD
router.post('/', async (req, res) => {
  const { nomeProduto, desc, preco, IDCategoria, IDProprietario } = req.body;
  const Produto = await Produto.create({ nomeProduto, desc, preco, IDCategoria, IDProprietario });
  res.status(201).json(Produto);
});

// Atualizar um produto
router.put('/:ID', async (req, res) => {
  const { ID } = req.params;
  const { nomeProduto, desc, preco, IDCategoria, IDProprietario } = req.body;
  const Produto = await Produto.update({ nomeProduto, desc, preco, IDCategoria, IDProprietario }, { where: { ID } });
  res.json(Produto);
});

// Excluindo um produto
router.delete('/:ID', async (req, res) => {
  const { ID } = req.params;
  await Produto.destroy({ where: { ID } });
  res.status(204).end();
});

// Associando um produto a uma categoria
router.post('/:ID/categoriaAssoc', async (req, res) => {
  const { ID } = req.params;
  const { IDCategoria } = req.body;
  const Produto = await Produto.findByPk(ID);
  if (Produto) {
    Produto.IDCategoria = IDCategoria;
    await Produto.save();
    res.json(Produto);
  } else {
    res.status(404).send('Produto não foi encontrado');
  }
});

module.exports = router;