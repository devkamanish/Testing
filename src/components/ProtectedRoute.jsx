
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, allowRole}) => {
    const {user}  = useAuth();

    if(!user){
        return <Navigate to = "/"/>
    }
    if(allowRole && user.role !== allowRole){
        return <Navigate to  = "/" />
    }
 
     return children;
}


export default ProtectedRoute

