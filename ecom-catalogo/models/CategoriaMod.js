'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('categorias', {
    IDCategoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeCategoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descCategoria: {
      type: DataTypes.STRING,
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
    tableName: 'categorias',
    timestamps: false
  });

  Categoria.associate = function(models) {
    Categoria.hasMany(models.Produto, { foreignKey: 'IDCategoria', as: 'produtos' });
  };

  return Categoria;
};