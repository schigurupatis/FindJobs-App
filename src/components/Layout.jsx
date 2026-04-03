import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Children components (Jobs, Companies, etc.) render here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
