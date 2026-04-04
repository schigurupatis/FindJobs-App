import React from 'react'
import { NavLink, Link } from 'react-router' // Use Link for the logo to avoid full page refresh

const Header = () => {
  // Helper function to handle active/inactive styles
  const navLinkStyles = ({ isActive }) => 
    `text-[15px] font-semibold transition-colors ${
      isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-500 hover:text-blue-600'
    }`;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-10">
          <NavLink to="/" className="flex items-center gap-1 cursor-pointer">
            {/* <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              LJ
            </div> */}
            <span className="text-2xl font-black text-blue-900 tracking-tighter">LocalJobs</span>
          </NavLink>

          {/* Corrected Navigation List */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/jobs" className={navLinkStyles}>Jobs</NavLink>
            <NavLink to="/companies" className={navLinkStyles}>Companies</NavLink>
            <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
          </div>
        </div>

        {/* Right Side: Auth */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-all">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-[#165dfc] text-white font-bold text-sm hover:opacity-90 shadow-md transition-all">
            Register
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
