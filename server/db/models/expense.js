const Sequelize = require('sequelize')
const db = require('../db')

const Expense = db.define('expense', {
  item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price:{
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Expense