const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type:String, unique:true},
  password:{type:String},
  firstName:String,
  lastName: String
})

module.exports = mongoose.model('User', userSchema)