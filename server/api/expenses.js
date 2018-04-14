const router = require('express').Router()
const {Expenses} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Expenses
    .findAll()
    .then(item => {
      console.log(item)
      res.json(item)
    })
    .catch(next)
})

router.post('/add', (req,res,next)=>{
  Expenses
  .create(req.body)
  .then(item => {
    console.log('trying to create ', item)
  })

}
)

