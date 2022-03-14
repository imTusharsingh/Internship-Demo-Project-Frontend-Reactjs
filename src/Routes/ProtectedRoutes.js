import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isExpired } from "react-jwt"
import { authUserError } from '../Redux/AuthUser/index'






const ProtectedRoutes = () => {

    const { data } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        if (data) {
            const expired = isExpired(data.token)
            if (expired) {
                dispatch(authUserError("Token Expired!"))
                setIsAuthenticated(false)
            }
            setIsAuthenticated(true)
        }
        else {
            setIsAuthenticated(false)
        }

    }, [])



    if (isAuthenticated === null) {
        return <></>
    }
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/signin" />
    )

}

export default ProtectedRoutes