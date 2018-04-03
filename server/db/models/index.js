// const users = require('./users');
// const kittens = require('./kittens');
const Puppies = require('./puppies');
const User = require('./User');
const db = require('../index.js');
// kittens.belongsTo(users);
// puppies.belongsTo(users);
// users.hasMany(kittens);
// users.hasMany(puppies);

module.exports = {db,Puppies, User};
