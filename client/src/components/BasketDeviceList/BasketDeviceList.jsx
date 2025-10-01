import React from 'react';
import BasketDeviceItem from "../BasketDeviceItem/BasketDeviceItem";
import classes from './BasketDeviceList.module.css'

const BasketDeviceList = ({basketDevices}) => {
    return (
        <div className={classes.BtDvList}>

            {
                basketDevices.map(bd =>
                <BasketDeviceItem bd={bd} key={bd.id}/>
            )}
        </div>
    );
};

export default BasketDeviceList;