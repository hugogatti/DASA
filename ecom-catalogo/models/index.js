const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('CatalogoProdutos', 'root', '1234', {
  host: 'localhost', // ou o host do seu servidor MySQL
  dialect: 'mysql'
});

const Produtos = require('./Produtos')(sequelize, DataTypes);
const Categoria = require('./Categoria')(sequelize, DataTypes);

const db = {
  Produtos,
  Categoria,
  sequelize,
  Sequelize
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;