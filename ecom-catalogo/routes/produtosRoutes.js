const express = require('express');
const router = express.Router();
const path = require('path');
const { Produto } = require('../models/indexMod');

router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

router.post('/', async (req, res) => {
    const { nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario } = req.body;
    const novoProduto = await Produto.create({ nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario });
    res.json(novoProduto);
});

router.put('/:IDProduto', async (req, res) => {
    const { IDProduto } = req.params;
    const { nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario } = req.body;
    await Produto.update({ nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario }, { where: { IDProduto } });
    res.json({ message: 'Produto Atualizado Com Sucesso' });
});

router.delete('/:IDProduto', async (req, res) => {
    const { IDProduto } = req.params;
    await Produto.destroy({ where: { IDProduto } });
    res.json({ message: 'Produto Excluído Com Sucesso' });
});

module.exports = router;