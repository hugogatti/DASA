const Sequelize = require('sequelize');

const sequelize = new Sequelize('CatalogoProdDev', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

const Categoria = require('./CategoriaMod')(sequelize, Sequelize.DataTypes);
const Produto = require('./ProdutosMod')(sequelize, Sequelize.DataTypes);

const db = {
  Categoria,
  Produto,
  sequelize,
  Sequelize
};

module.exports = db;
