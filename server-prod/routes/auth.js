const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/auth', authMiddleware, controller.check)

module.exports = router