import { expect } from "chai";
import { model, sync } from "../index";
const Expense = model('expense')


describe('Expense model', () => {
  beforeEach(() => {
    return sync({force: true})
  })
})