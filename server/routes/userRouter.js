const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const {User} = require("../models/models");
const {use} = require("express/lib/application");
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router