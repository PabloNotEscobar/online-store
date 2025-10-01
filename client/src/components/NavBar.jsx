import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utuls/consts";
import {Button} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from 'react-router-dom';
import {BiBasket} from "react-icons/bi"; // Правильный импорт



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand
                    style={{cursor: 'pointer'}}
                    onClick={() => navigate(SHOP_ROUTE)}
                    variant={'outline-light'}
                >
                    Главная
                </Navbar.Brand>
                {user.isAuth
                    ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={'outline-light'} className="ms-2" onClick={() => logOut()} >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>

                    </Nav>
                }
                <BiBasket
                    className="ms-2"
                    color="white"
                    size={25}
                    onClick={() => navigate(BASKET_ROUTE)}
                    style={{cursor: 'pointer'}}
                />
            </Container>
        </Navbar>

    );
});

export default NavBar;