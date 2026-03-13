
import React, { Children, useState } from 'react'
import {createContext , useContext}  from "react";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
     
    const [user, setUser]  = useState(null)
   
    const login = (email, role)=>{
        const fakeUser = {email, role}
        setUser(fakeUser)
    }

    
    const logout = ()=>{
        setUser(null)
    }


  return (
     <AuthContext.Provider value={{login, logout, user}}>
        {children}
     </AuthContext.Provider>
  )
}


export const useAuth  = ()=> useContext(AuthContext);

export default AuthProvider;



