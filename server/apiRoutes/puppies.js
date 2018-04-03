const router = require('express').Router();
const Puppies = require('../db/models/puppies');

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) {
    Puppies.findAll()
        .then(puppies => res.json(puppies));
});
// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { /* etc */ });
// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) { /* etc */ });
// matches DELTE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) { /* etc */ });

module.exports = router;
