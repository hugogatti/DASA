// models/ProdutosMod.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('produtos', {
    IDProduto: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Define IDProduto como chave primária
      autoIncrement: true // Assume que é autoincrementável
    },
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
    IDProprietario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CriadoEm: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'CriadoEm',
      defaultValue: DataTypes.NOW
    },
    Atualizacao: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'Atualizacao',
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'produtos', // Nome correto da tabela no banco de dados
    timestamps: false // Define como false se não usar timestamps automáticos
  });

  Produto.associate = function(models) {
    Produto.belongsTo(models.Categoria, { foreignKey: 'IDCategoria', as: 'categorias' });
  };

  return Produto;
};
