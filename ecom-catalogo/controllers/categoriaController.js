const { Categoria } = require('../models/indexMod');

exports.createCategoria = async (req, res) => {
    try {
        const criarCat = await Categoria.create(req.body);
        res.status(201).json(criarCat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCategoria = async (req, res) => {
    try {
        const [atualizarCat] = await Categoria.update(req.body, {
            where: { ID: req.params.ID }
        });
        if (atualizarCat) {
            const categoria = await Categoria.findOne({ where: { ID: req.params.ID } });
            res.status(200).json(categoria);
        } else {
            throw new Error('A Categoria Não Foi Encontrada');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        const excluirCat = await Categoria.destroy({
            where: { ID: req.params.ID }
        });
        if (excluirCat) {
            res.status(204).send();
        } else {
            throw new Error('A Categoria Não Foi Encontrada');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
