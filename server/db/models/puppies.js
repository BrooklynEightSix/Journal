const Sequelize = require('sequelize');
const db = require ('../index.js');

module.exports = db.define('puppies', {
  firstName: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate:{
      notEmpty:true
    }
  },
  lastName: {
    type: Sequelize.TEXT
  },
  breed: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});
