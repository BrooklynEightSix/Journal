'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('expense', {
      item: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price:{
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('expense')
  }
};
