import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Login from '../Pages/Login';
import Signup from '../Pages/SignupPage';
import SearchPage from '../Pages/SearchResults';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/searchpage' element={<SearchPage />}></Route>
        </Routes>
    )
}
export default Routers;