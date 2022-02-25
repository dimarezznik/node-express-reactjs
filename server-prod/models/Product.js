const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  id: {
    type: Number,
    required: true,
    primaryKey: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  descriptionOne: {
    type: String,
    required: true
  },
  descriptionTwo: {
    type: String,
    required: true
  },
  amount: {
    type: Number
  },
  totalPrice: {
    type: Number
  }
})

module.exports = mongoose.model('products', productSchema)