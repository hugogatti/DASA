const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
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