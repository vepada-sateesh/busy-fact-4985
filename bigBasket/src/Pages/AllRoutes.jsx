import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from '../Components/Login'
import Cart from '../Components/Cart'
import PrivateRoute from '../Context/PrivateRoute'
import ProductPage from '../Components/ProductPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
            <Route path="/product" element={<ProductPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes