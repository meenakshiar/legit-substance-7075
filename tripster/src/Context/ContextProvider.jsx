import React, { createContext, useState } from 'react'

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [initData, setInitData] = useState({
    'source': '',
    'destination': ''
  })
  const [destdata, setdestdata] = useState([]);

  return (
    <Context.Provider value={{ width, setWidth, open, setOpen, isAuth, setIsAuth, initData, setInitData, destdata, setdestdata }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;