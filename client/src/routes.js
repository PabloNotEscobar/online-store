import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utuls/consts";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import {Navigate} from "react-router-dom";
import DevicePage from "./pages/DevicePage";
import Basket from "./pages/Basket/Basket";

export const authRoutes = [
    {path: ADMIN_ROUTE, element: <Admin />},
]

export const publicRoutes = [
    {path: SHOP_ROUTE, element: <Shop/>},
    {path: LOGIN_ROUTE, element: <Auth/>},
    {path: REGISTRATION_ROUTE, element: <Auth/>},
    {path: DEVICE_ROUTE + '/:id', element: <DevicePage/>},
    {path: BASKET_ROUTE, element: <Basket/>},
    {path: '*', element: <Navigate to={SHOP_ROUTE}/>}
]