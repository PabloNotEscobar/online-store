const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const basketController = require('../controllers/basketController')
const {route} = require("express/lib/application");

router.post('/add', authMiddleware, basketController.createDeviceBasket)
router.get('/', authMiddleware, basketController.getAllDeviceBasket)

module.exports = router

