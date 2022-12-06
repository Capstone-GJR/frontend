import React from 'react'
import { Navigate } from 'react-router-dom';
import { useLocalState } from '../util/useLocalState'

function PrivateRoute({ children }) {
    const access_token = localStorage.getItem("access_token");

    if(!access_token) {
        return <Navigate to="/login" />
    }

    return children;
}

export default PrivateRoute;