'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categorias', {
      IDCategoria: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCategoria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descCategoria: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('categorias');
  }
};
