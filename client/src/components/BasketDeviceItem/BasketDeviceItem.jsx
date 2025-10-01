import React, {useContext} from 'react';
import {Context} from "../../index";
import {onDOMContentLoaded} from "bootstrap/js/src/util";
import {observer} from "mobx-react-lite";
import {Card, Col, Image, Row} from "react-bootstrap";
import star from "../../assets/star.png";
import {useNavigate} from "react-router-dom";
import classes from './BasketDeviceItem.module.css'
import {DEVICE_ROUTE} from "../../utuls/consts";

const BasketDeviceItem = observer(({bd}) => {
    const navigate = useNavigate()

    return (

        <div className={classes.BasketDeviceItem}>
            <div>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + bd.device.img} onClick={() => navigate(DEVICE_ROUTE + '/' + bd.device.id)}/>
            </div>
            <div className={classes.description}>
                <h5>Название: {bd.device.name}</h5>
                <div>Цвет</div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
});

export default BasketDeviceItem;