const { Produto } = require('../models');

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
        const CategoriaProd = await Produto.findByPk(IDProduto);
        CategoriaProd.IDCategoria = IDCategoria;
        await CategoriaProd.save();
        res.status(200).json(CategoriaProd);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const [atualizarProd] = await Produto.update(req.body, {
            where: { ID: req.params.ID }
        });
        if (atualizarProd) {
            const produto = await Produto.findOne({ where: { ID: req.params.ID } });
            res.status(200).json(produto);
        } else {
            throw new Error('Produto não foi encontrado');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        const excluirProd = await Produto.destroy({
            where: { id: req.params.id }
        });
        if (excluirProd) {
            res.status(204).send();
        } else {
            throw new Error('Produto não foi encontrado');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};