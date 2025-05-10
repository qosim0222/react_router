import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-[#1C1E53] text-white py-4  " >
      <nav className="container  px-4 flex items-center gap-8 justify-between ">

        <NavLink to="/" className="w-[110px]   ">
          <img src={logo} alt="Logo" className="w-full h-auto " />
        </NavLink>
        <div className="flex items-center gap-6 text-sm font-medium leading-7 hover:text-white ">

          <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-white' : 'text-[#BBBBCB]'} hover:text-white`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-white' : 'text-[#BBBBCB]'} hover:text-white`}>About</NavLink>
          <NavLink to="/work" className={({ isActive }) => `${isActive ? 'text-white' : 'text-[#BBBBCB]'} hover:text-white`}>Work</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `${isActive ? 'text-white' : 'text-[#BBBBCB]'} hover:text-white`}>Pricing</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `${isActive ? 'text-white' : 'text-[#BBBBCB]'} hover:text-white`}>Blog</NavLink>
          <NavLink to="/contact" className="text-white border border-[#F4F6FC33] px-5 py-2 rounded-full hover:bg-white hover:text-[#1C1E53] transition">
            Contact us
          </NavLink>
        </div>


      </nav>
    </header>
  )
}

export default Header

