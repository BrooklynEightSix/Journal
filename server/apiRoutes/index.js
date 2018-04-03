const router = require('express').Router();



router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/

//error handling
router.use((req,res,next)=>{
  const err = new Error("these are not the droids you are looking for");
  err.status = 404;
  next(err);
});

module.exports = router;
