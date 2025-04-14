import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Login from './pages/Login'
import Doctor from './pages/Doctor'

function App() {
  return (
  <BrowserRouter>
    <div className='mx-30 '>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/doctors/:speciality" element={<Doctors/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>  
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/doctors/:docid" element={<Doctor/>}/>


  </Routes>
  <Footer/>
  </div>
  </BrowserRouter>  
  )
}

export default App
