import React, {createContext, useState} from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

  return (
    <Context.Provider value={{width, setWidth, open, setOpen, isAuth, setIsAuth}}>
        {children}
    </Context.Provider>
    )
}

export default ContextProvider;