'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'Contacts',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
)
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Contacts', 'email')
  }
};