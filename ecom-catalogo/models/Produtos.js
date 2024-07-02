
//Informações do Produtos
  module.exports = (sequelize, DataTypes) => {
    const Produtos = sequelize.define('Produtos', {
      nomeProduto: {
        type: DataTypes.STRING,
        allowNull: false
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      preco: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      IDCategoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
      },
      IDProprietario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
    });
  
    Produtos.associate = (models) => {
      Produtos.belongsTo(models.Categoria, {
        foreignKey: 'IDCategoria',
        as: 'categoria'
      });
    };
  
    return Produtos;
  };