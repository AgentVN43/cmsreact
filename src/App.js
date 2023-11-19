import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Detail from './Pages/Detail'
import AboutUs from './Pages/AboutUs'


export default function App() {
  return (
    
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  
  )
}
