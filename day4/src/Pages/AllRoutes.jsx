import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from '../Components/Login'
import Cart from '../Components/Cart'
import PrivateRoute from '../Context/PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes