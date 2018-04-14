'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('expenses', {
     userId:{
       type:Sequelize.INTEGER,
       references:{
         model:'users',
         key:'id'
       }
     },
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
   return queryInterface.dropTable('expenses')
  }
};
