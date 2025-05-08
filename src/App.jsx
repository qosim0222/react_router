import React from 'react'
import Home from '../pages/home/Home'
import Work from '../pages/work/Work'
import About from '../pages/about/About'
import Pricing from '../pages/pricing/Pricing'
import Blog from '../pages/blog/Blog'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Contact from '../pages/contact/Contact'
import Footer from './components/footer/Footer'
import MainRote from '../pages'
function App() {

  return (
    <>
    
        <Header />
        <main className='min-h-[80vh]'>

          <MainRote />
        </main>
        <Footer />

      
    </>
  )
}

export default App
