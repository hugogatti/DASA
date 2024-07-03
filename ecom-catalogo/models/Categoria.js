'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nomeCategoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descCategoria: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Categoria.associate = function(models) {
    Categoria.hasMany(models.Produto, { foreignKey: 'IDCategoria', as: 'produtos' });
  };

  return Categoria;
};
