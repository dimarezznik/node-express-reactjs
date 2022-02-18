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
  imageSrc: {
    type: String,
    default: ''
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
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('products', productSchema)