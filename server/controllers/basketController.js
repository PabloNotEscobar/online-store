const {Basket, BasketDevice, Device} = require("../models/models");
const {where} = require("sequelize");

class basketController {
    async createDeviceBasket (req, res) {
        const {deviceId} = req.body
        const userId = req.user.id
        let basket = await Basket.findOne({where: {userId}})

        if (!basket) {
            basket = await Basket.create({userId})
        }
        console.log(basket.id)


        const basketDevice = await BasketDevice.create({
            deviceId,
            basketId: basket.id
        })

        return res.json(basketDevice)
    }

    async getAllDeviceBasket (req, res) {
        const userId = req.user.id
        console.log(userId)
        let basket = await Basket.findOne({where: {userId}})
        console.log(basket.id)

        if (!basket) {
            basket = await Basket.create({userId})
        }

        const basketId = basket.id
        const basketDevices = await BasketDevice.findAndCountAll({
            where: { basketId },
            include: [{
                model: Device,
                attributes: ['id', 'name', 'img', 'price']
            }]
        })
        console.log(basketDevices.rows)

        return res.json(basketDevices)
    }
}

module.exports = new basketController()