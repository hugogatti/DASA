'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtos', {
      IDProduto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descProduto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      precoProduto: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      IDCategoria: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categorias',
          key: 'IDCategoria'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      CriadoEm: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Atualizacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtos');
  }
};
