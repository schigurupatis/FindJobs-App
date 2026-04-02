import React from 'react'

const Header = () => {
  return (
    <>
        {/* <!-- Use @import "tailwindcss"; in your CSS to get started --> */}

        <header className="bg-white border-be border-mist-200 sticky inset-bs-0 z-50">
        <nav className="max-inline-7xl mx-auto px-4 sm:px-6 lg:px-8 block-20 flex items-center justify-between">
            
            {/* <!-- Logo & Left Nav --> */}
            <div className="flex items-center gap-inline-8">
            <div className="flex items-center gap-inline-2">
                {/* <!-- Using the new "Mist" palette for a professional tech feel --> */}
                <div className="size-10 bg-mist-900 rounded-xl flex items-center justify-center text-white">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.25V4.606c0-.596-.511-1.05-1.106-1.026a10.023 10.023 0 00-4.63 1.155L12 6.5l-3.264-1.765a10.023 10.023 0 00-4.63-1.155C3.511 3.556 3 4.01 3 4.606v8.644m18 0a10.022 10.022 0 01-4.502 8.358m4.502-8.358c-.595-.024-1.106.43-1.106 1.026v5.82a1 1 0 01-1.555.832l-3.339-2.226m-9 0l-3.34 2.226A1 1 0 013 19.82v-5.82c0-.596-.511-1.05-1.106-1.026a10.022 10.022 0 014.502-8.358" />
                </svg>
                </div>
                <span className="text-xl font-bold text-mist-900 tracking-tight">Jobs App</span>
            </div>

            {/* <!-- Main Navigation using logical spacing --> */}
            <div className="hidden md:flex gap-inline-6 mbs-1">
                <a href="#" className="text-sm font-medium text-mist-600 hover:text-mist-900 transition-colors">Find Jobs</a>
                <a href="#" className="text-sm font-medium text-mist-600 hover:text-mist-900 transition-colors">Companies</a>
                <a href="#" className="text-sm font-medium text-mist-600 hover:text-mist-900 transition-colors">Salaries</a>
            </div>
            </div>

            {/* <!-- Right Actions --> */}
            <div className="flex items-center gap-inline-4">
            <a href="#" className="text-sm font-semibold text-mist-700 hover:text-mist-900 px-3 py-2 rounded-lg">Sign in</a>
            
            {/* <!-- New "Mauve" color for the CTA button to add a modern, warm touch --> */}
            <button className="bg-mauve-600 hover:bg-mauve-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md">
                Post a Job
            </button>
            
            {/* <!-- Mobile Menu Toggle (Simplified) --> */}
            <button className="md:hidden p-2 text-mist-600">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
            </div>
        </nav>
        </header>

    </>
  )
}

export default Header