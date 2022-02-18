const express = require('express')
const controller = require('../controllers/cart')
const router = express.Router()

router.post('/', controller.updateCart)
router.delete('/', controller.removeCart)


module.exports = router