// models/indexMod.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('catalogoproddev', 'root', '1234', {
  dialect: 'mysql',
  host: '127.0.0.1'
});

const Produto = require('./ProdutosMod')(sequelize, Sequelize.DataTypes);
const Categoria = require('./CategoriaMod')(sequelize, Sequelize.DataTypes);

// Definindo associações
Categoria.associate({ Produto });
Produto.associate({ Categoria });

module.exports = {
  sequelize, // Exportando a instância do Sequelize
  Produto,
  Categoria
};
