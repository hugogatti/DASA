//Informações das categorias
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nomeCategoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IDProprietario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Categoria.associate = (models) => {
    Categoria.hasMany(models.Produtos, {
      foreignKey: 'IDCategoria',
      as: 'produtos'
    });
  };

  return Categoria;
};