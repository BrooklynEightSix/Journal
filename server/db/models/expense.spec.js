const {expect} = require('chai')
const db = require('../index')
const Expense = db.model('expense')


describe('Expense model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
})