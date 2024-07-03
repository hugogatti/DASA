const express = require('express');
const router = express.Router();
const { Produto } = require('../models');

// Listar todos os produtos
router.get('/', async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

// Criar um novo produto
router.post('/', async (req, res) => {
  const { nomeProduto, descProduto, precoProduto, IDCategoria } = req.body;
  const novoProduto = await Produto.create({ nomeProduto, descProduto, precoProduto, IDCategoria });
  res.json(novoProduto);
});

// Atualizar um produto
router.put('/:IDProduto', async (req, res) => {
  const { IDProduto } = req.params;
  const { nomeProduto, descProduto, precoProduto, IDCategoria } = req.body;
  await Produto.update({ nomeProduto, descProduto, precoProduto, IDCategoria }, { where: { IDProduto } });
  res.json({ message: 'Produto atualizado com sucesso' });
});

// Excluir um produto
router.delete('/:IDProduto', async (req, res) => {
  const { IDProduto } = req.params;
  await Produto.destroy({ where: { IDProduto } });
  res.json({ message: 'Produto excluído com sucesso' });
});

module.exports = router;
