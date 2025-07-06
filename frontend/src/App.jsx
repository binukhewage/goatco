import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import Collections from './pages/Collections'
import CollectionDetail from './pages/CollectionDetail'
import SearchBar from './components/SearchBar'
import Login from './pages/Login'
import Launch from './pages/Launch'

const App = () => {
  const location = useLocation()
  const isLaunchPage = location.pathname === '/'

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {!isLaunchPage && <Navbar />}
      {!isLaunchPage && <SearchBar />}

      <Routes>
        <Route path='/' element={<Launch />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path="/collection/:collectionId" element={<CollectionDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      {!isLaunchPage && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
