import React, {useContext, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import {data} from "react-router-dom";
import Pages from "../components/Pages";
import FilterBar from "../components/FliterBar/FilterBar";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, []);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
                console.log(device.devices)
            }
        )
    }, [device.selectedType, device.selectedBrand, device.page]);



    return (
        <Container>
            <Row>
              <Col md={3}>
                  <FilterBar/>
              </Col>
              <Col md={9}>
                  <DeviceList/>
                  <Pages/>
              </Col>
            </Row>
        </Container>
    );
});

export default Shop;