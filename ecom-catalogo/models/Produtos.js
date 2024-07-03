'use strict';

module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    nomeProduto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descProduto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precoProduto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    IDCategoria: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categorias',
        key: 'IDCategoria'
      }
    }
  }, {});

  Produto.associate = function(models) {
    Produto.belongsTo(models.Categoria, { foreignKey: 'IDCategoria', as: 'categorias' });
  };

  return Produto;
};