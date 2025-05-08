import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-[#1C1E53] text-white py-4">
      <nav className="container mx-auto px-4 flex items-center justify-center  gap-8 ">

        <NavLink to="/" className="w-[110px]  ">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </NavLink>


        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium leading-7 text-[#BBBBCB] hover:text-white ${isActive ? 'text-white' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm font-medium leading-7 text-[#BBBBCB] hover:text-white ${isActive ? 'text-white' : ''
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `text-sm font-medium leading-7 text-[#BBBBCB] hover:text-white ${isActive ? 'text-white' : ''
            }`
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `text-sm font-medium leading-7 text-[#BBBBCB] hover:text-white ${isActive ? 'text-white' : ''
            }`
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-sm font-medium leading-7 text-[#BBBBCB] hover:text-white ${isActive ? 'text-white' : ''
            }`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white border border-[#F4F6FC33] px-5 py-2 rounded-full text-sm font-medium leading-7 hover:bg-white hover:text-[#1C1E53] transition"
        >
          Contact us
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
