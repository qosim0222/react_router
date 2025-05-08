import React from 'react'
import Home from '../pages/home/Home'
import Work from '../pages/work/Work'
import About from '../pages/about/About'
import Pricing from '../pages/pricing/Pricing'
import Blog from '../pages/blog/Blog'
import { Routes, Route } from 'react-router-dom'
import Contact from '../pages/contact/Contact'
const MainRote = () => {
  return (

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
  )
}

export default MainRote