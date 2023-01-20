import React, {createContext, useState} from 'react'

export const CarouselContext = createContext();

const CarouselContextProvider = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

  return (
    <CarouselContext.Provider value={{width, setWidth, open, setOpen, isAuth, setIsAuth}}>
        {children}
    </CarouselContext.Provider>
    )
}

export default CarouselContextProvider;