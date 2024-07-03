const express = require('express');
const router = express.Router();
const { models } = require('../models/indexMod');


// Listar todos os produtos
router.get('/', async (req, res) => {
  const produtos = await models.findAll();
  res.json(produtos);
});

// Criar um novo produto
router.post('/', async (req, res) => {
  const { nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario } = req.body;
  const novoProduto = await models.create({ nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario });
  res.json(novoProduto);
});

// Atualizar um produto
router.put('/:IDProduto', async (req, res) => {
  const { IDProduto } = req.params;
  const { nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario } = req.body;
  await models.update({ nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario }, { where: { IDProduto } });
  res.json({ message: 'Produto Atualizado Com Sucesso' });
});

// Excluir um produto
router.delete('/:IDProduto', async (req, res) => {
  const { IDProduto } = req.params;
  await models.destroy({ where: { IDProduto } });
  res.json({ message: 'Produto Atualizado Com Sucesso' });
});

module.exports = router;
