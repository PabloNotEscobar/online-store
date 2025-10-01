import React, {useContext, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utuls/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Auth = observer(() => {
    const [showPassword, setShowPassword] = useState(false);
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [passSymbAmount, setPassSymbAmount] = useState(0)
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputGroup className="mt-3">
                        <Form.Control
                            placeholder="Введите password..."
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value)
                                setPassSymbAmount(e.target.value.length)
                            }}
                            type={showPassword ? "text" : "password"}
                        />
                        <InputGroup.Text
                            style={{ cursor: 'pointer' }}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </InputGroup.Text>
                    </InputGroup>

                    <Row>
                        {passSymbAmount > 7
                            ?
                            <Col style={{color: "green"}}>
                                ✓ At least 8 symbols
                            </Col>
                            :

                            <Col style={{color: "red"}}>
                                × At least 8 symbols
                            </Col>
                        }


                    </Row>

                    <Row className="mt-3">
                        <Col xs="auto" className="pe-3">
                            {isLogin
                                ? <>No account? <NavLink to={REGISTRATION_ROUTE}>Registry</NavLink></>
                                : <>Have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink></>
                            }
                        </Col>
                        <Col xs="auto" className="ms-auto">
                            <Button variant="outline-success" onClick={click}>
                                {isLogin ? "Login" : "Registry"}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
});

export default Auth;