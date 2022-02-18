const express = require('express')
const controller = require('../controllers/product')
const passport = require('passport' )
const router = express.Router()

router.get('/', controller.getProductAll)

module.exports = router