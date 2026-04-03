import React from 'react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              JA
            </div>
            <span className="text-2xl font-black text-blue-900 tracking-tighter">Jobs-App</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/jobs" className="text-[15px] font-semibold text-gray-500 hover:text-blue-600">Jobs</a>
            <a href="/companies" className="text-[15px] font-semibold text-gray-500 hover:text-blue-600">Companies</a>
            <a href="/services" className="text-[15px] font-semibold text-gray-500 hover:text-blue-600">Services</a>
          </div>
        </div>

        {/* Right Side: Auth */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-[#FF4B2B] text-white font-bold text-sm hover:opacity-90 shadow-md">
            Register
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
