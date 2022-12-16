import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const access_token = localStorage.getItem("access_token");

    return (
        access_token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;