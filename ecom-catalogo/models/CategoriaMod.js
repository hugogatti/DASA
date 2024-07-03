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
    },
    IDProprietario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'produtos',
        key: 'IDProprietario'
      }
    }
  }, {});

  Categoria.associate = function(models) {
    Categoria.hasMany(models.Produto, { foreignKey: 'IDCategoria', as: 'produtos' });
  };

  return Categoria;
};
