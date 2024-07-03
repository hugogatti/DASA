'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adicionar índice ao campo IDProprietario na tabela produtos
    await queryInterface.addIndex('produtos', ['IDProprietario']);

    // Adicionar as colunas de chave estrangeira
    await queryInterface.addColumn('produtos', 'IDCategoria', {
      type: Sequelize.INTEGER,
      references: {
        model: 'categorias',
        key: 'IDCategoria'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addColumn('categorias', 'IDProprietario', {
      type: Sequelize.INTEGER,
      references: {
        model: 'produtos',
        key: 'IDProprietario'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },
  down: async (queryInterface, Sequelize) => {
    // Remover as colunas de chave estrangeira
    await queryInterface.removeColumn('produtos', 'IDCategoria');
    await queryInterface.removeColumn('categorias', 'IDProprietario');

    // Remover o índice do campo IDProprietario na tabela produtos
    await queryInterface.removeIndex('produtos', ['IDProprietario']);
  }
};
