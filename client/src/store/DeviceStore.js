import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 10
        this._basket = []
        makeAutoObservable(this)
    }

    setPage(page) {
        this._page = page
    }

    setBasket(basket) {
        this._basket = basket
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit = limit
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get devices() {
        return this._devices
    }

    get brands() {
        return this._brands
    }

    get selectedType() {
        return this._selectedType
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get basket() {
        return this._basket
    }
}
