const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')
const Product = require('../models/Product')

module.exports.updateCart = async function (req, res) {
  try {
    const product = await User.findOne({email: req.body.email})
    console.log(product)
    const cart = await User.findOneAndUpdate(
        {email: req.body.email},
        {cart: [...product.cart, req.body.product]},
        {new: true}
    )

    res.status(200).json(cart)
  } catch (e) {
    errorHandler(res, e)
  }

}

module.exports.removeCart = async function (req, res) {
  try {
    const product = await User.findOne({email: req.body.email})

    const cart = await User.findOneAndUpdate(
        {email: req.body.email},
        {cart: product.cart.filter(prod => prod.id !== req.body.id)},
        {new: true}
    )

    res.status(200).json(cart)
  } catch (e) {
    errorHandler(res, e)
  }

}