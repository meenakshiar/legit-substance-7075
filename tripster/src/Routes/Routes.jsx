import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Login from '../Pages/Login';
import Signup from '../Pages/SignupPage';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
        </Routes>
    )
}
export default Routers;