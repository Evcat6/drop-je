import React, { useContext, useState } from "react";

const InputContext = React.createContext()
const InputUpdateContext = React.createContext()


    export const useInput = () => {
        return useContext(InputContext)
    }

    export const useUpdateInput = () => {
        return useContext(InputUpdateContext)
    }




export const InputProvider = ({children}) => {

    const [ query, setQuery ] = useState('');


    const updQuery = (e) => {
        return setQuery(e.target.value)
    };

    return (
        <InputContext.Provider value={query} >
            <InputUpdateContext.Provider value={updQuery} >
                {children}
            </InputUpdateContext.Provider>
        </InputContext.Provider>
    );
}