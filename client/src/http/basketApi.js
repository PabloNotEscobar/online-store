import {$authHost} from "./index";


export const addDeviceBasket = async (deviceId) => {
    const {data} = await $authHost.post('api/basket/add', deviceId)
    return data
}

export const getAllDeviceBasket = async () => {
    const {data} = await $authHost.get('api/basket/')
    return data
}