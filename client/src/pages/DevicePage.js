import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import backdrop from "bootstrap/js/src/util/backdrop";
import {useParams} from "react-router-dom";
import {fetchDevices, fetchOneDevice} from "../http/deviceApi";
import {addDeviceBasket} from "../http/basketApi";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, []);

    const DeviceBasket = () => {
        addDeviceBasket({deviceId: id}).then(data => console.log(data))
    }

    return (
        <Container>
            <Row className="">
                <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + device.img} height={300} width={300}/>
                </Col>
                <Col md={4}>
                    <h2>{device.name}</h2>
                    <Row className="d-flex flex-column justify-content-center">
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: "contain", fontSize: 64, }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height:300, fontSize: 32, border: "5px solid lightgray"}}
                    >
                        <h3>{device.price}</h3>
                        <Button
                            variant={"outline-dark"}
                            onClick={() => DeviceBasket()}
                        >
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Характеристики</h2>
                {device.info.map(info =>
                    <Col>
                        <Row key={info.id} style={{background: info.id % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                    </Col>
                )}
            </Row>

        </Container>
    );
};

export default DevicePage;