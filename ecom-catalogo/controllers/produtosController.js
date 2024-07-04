const { Produto } = require('../models/indexMod');

exports.createProduto = async (req, res) => {
    try {
        const criarProd = await Produto.create(req.body);
        res.status(201).json(criarProd);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.associateProduto = async (req, res) => {
    try {
        const { IDProduto, IDCategoria } = req.body;
        const produto = await Produto.findByPk(IDProduto);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        produto.IDCategoria = IDCategoria;
        await produto.save();
        res.status(200).json(produto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const [atualizarProd] = await Produto.update(req.body, {
            where: { IDProduto: req.params.IDProduto }
        });
        if (atualizarProd) {
            const produto = await Produto.findOne({ where: { IDProduto: req.params.IDProduto } });
            res.status(200).json(produto);
        } else {
            throw new Error('O Produto Não Foi Encontrado');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        const excluirProd = await Produto.destroy({
            where: { IDProduto: req.params.IDProduto }
        });
        if (excluirProd) {
            res.status(204).send();
        } else {
            throw new Error('O Produto Não Foi Encontrado');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
