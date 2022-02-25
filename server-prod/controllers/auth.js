const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

const jwtGenerate = (id, email, password, cart) => {
 return jwt.sign({
   id,
   email,
   password,
   cart
 }, process.env.SECRET_KEY, {expiresIn: 60 * 60})
}

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})
  if (candidate) {
    res.status(409).json({
      message: 'Такой email уже занят.'
    })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    })
    try {
      await user.save()
      const token = jwtGenerate(user.id, user.email, user.password, user.cart)
      res.status(201).json({token, user})
    } catch (e) {
      errorHandler(res, e)
    }

  }
}

module.exports.login = async function (req, res) {
  const user = await User.findOne({email: req.body.email})

  if (user) {
    const passwordResult = bcrypt.compareSync(req.body.password, user.password)
    if (passwordResult) {
      const token = jwtGenerate(user.id, user.email, user.password, user.cart)
      res.status(200).json({token, user})
    } else {
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова'
      })
    }
  } else {
    res.status(404).json({
      message: 'Пользователь с таким email не найден'
    })
  }
}


module.exports.check = async function(req, res) {
  const token = jwtGenerate(req.user.id, req.user.email, req.user.password)
  res.json({token})
}