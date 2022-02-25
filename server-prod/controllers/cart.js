const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')

module.exports.updateCart = async function (req, res) {
  try {
    const user = await User.findOne({email: req.body.email})
    // const product =
      const cart = await User.findOneAndUpdate(
          {email: req.body.email},
          {cart: [...user.cart, req.body.card]},
          {new: true}
      )



    res.status(200).json(cart)
  } catch (e) {
    errorHandler(res, e)
  }

}

module.exports.removeCart = async function (req, res) {
  try {
    console.log(req.body)
    const user = await User.findOne({email: req.body.email})

    const cart = await User.findOneAndUpdate(
        {email: req.body.email},
        {cart: user.cart.filter(prod => prod._id !== req.body.id)},
        {new: true}
    )

    res.status(200).json(cart)
  } catch (e) {
    errorHandler(res, e)
  }

}