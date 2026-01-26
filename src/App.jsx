import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Outfit']">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
    </div>
  )
}

export default App