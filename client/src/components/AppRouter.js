import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(path => <Route key={path} {...path} />)
            }
            {publicRoutes.map(path => <Route key={path} {...path} />)}
        </Routes>
    );
});

export default AppRouter;