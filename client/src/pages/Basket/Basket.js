import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {getAllDeviceBasket} from "../../http/basketApi";
import {observer} from "mobx-react-lite";
import BasketDeviceList from "../../components/BasketDeviceList/BasketDeviceList";
import classes from './Basket.module.css'
import {fetchDevices} from "../../http/deviceApi";
import {Spinner} from "react-bootstrap";

const Basket = observer(() => {
    const {user, device} = useContext(Context)
    const [basketDevices, setBasketDevices] = useState([])
    const [loading, setLoading] = useState(true) // Начальное значение true


    useEffect(() => {
        if (user.isAuth) {
            setLoading(true)
            getAllDeviceBasket()
                .then(data => {
                    setBasketDevices(data.rows)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setLoading(false)
        }
    }, [user.isAuth])

    return (
        <div className={classes.Loader}>
            {user.isAuth
                ? loading
                    ?
                    <div>
                        <Spinner animation="border" variant="secondary" />
                    </div>
                    :
                    <BasketDeviceList basketDevices={basketDevices}/>
                : <div>Registry to add devices to basket</div>
            }
        </div>
    )
})

export default Basket