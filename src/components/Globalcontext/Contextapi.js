import React, { useState, createContext } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [Navopen, setNavopen] = useState(-100);
    const [Searchboxpos,setSearchboxpos]= useState(0)


    return (
        <GlobalContext.Provider value={{ val1: [Navopen, setNavopen],val2:[Searchboxpos,setSearchboxpos] }}>
            {children}
        </GlobalContext.Provider>
    )
}
