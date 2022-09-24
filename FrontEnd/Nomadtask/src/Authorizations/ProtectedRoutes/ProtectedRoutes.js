import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

function ProtectedRoutes({redirectPath='/login',children}) {
    let isAuth = localStorage.getItem('isAuthenticated');

    if (isAuth !== 'true') {
        return(
            <Navigate to={redirectPath} replace />
        )
    }
    return(
        children ? children : <Outlet/>
    )
}

export default ProtectedRoutes;