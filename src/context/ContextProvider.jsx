import React, { createContext } from 'react'
import { AuthContextProvider } from './AuthContext'
import { useState } from 'react';

const ContextProvider = ({ children }) => {
    const [loginIn, setLoginIn] = useState(false);

    const values = { loginIn, setLoginIn }

    return (
        <MainContext.Provider value={values}>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </MainContext.Provider>
    )
}
export const MainContext = createContext(null)

export default ContextProvider