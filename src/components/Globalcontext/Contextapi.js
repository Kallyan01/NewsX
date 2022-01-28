import React, { useState, createContext } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [Navopen, setNavopen] = useState(-100);


    return (
        <GlobalContext.Provider value={{ val1: [Navopen, setNavopen] }}>
            {children}
        </GlobalContext.Provider>
    )
}
