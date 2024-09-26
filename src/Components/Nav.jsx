import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/logout')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 text-xl font-bold transition duration-300" : "text-gray-800 text-xl font-bold hover:text-gray-700 transition duration-300"}>Blog Explorer</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-sm text-blue-500 font-medium" : "text-sm text-gray-700 font-medium hover:text-indigo-500"}>Home</NavLink>
            <NavLink to="/authors" className={({ isActive }) => isActive ? "text-sm text-blue-500 font-medium" : "text-sm text-gray-700 font-medium hover:text-indigo-500"}>Authors</NavLink>
            <NavLink to="/create-post" className={({ isActive }) => isActive ? "text-sm text-blue-500 font-medium" : "text-sm text-gray-700 font-medium hover:text-indigo-500"}>New Post</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-sm text-blue-500 font-medium" : "text-sm text-gray-700 font-medium hover:text-indigo-500"}>Login</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? "relative text-blue-500 transition duration-300" : "relative text-gray-700 hover:text-gray-600 transition duration-300"}>
              <span className="absolute inset-0 transform skew-x-12 bg-indigo-100"></span>
              <span className="relative text-sm font-medium">Sign Up</span>
            </NavLink>
          </div>
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" 
              aria-label="toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/" className={({ isActive }) => isActive ? "block text-sm text-blue-500 font-medium" : "block text-sm text-gray-700 font-medium hover:text-indigo-500"}>Home</NavLink>
              <NavLink to="/authors" className={({ isActive }) => isActive ? "block text-sm text-blue-500 font-medium" : "block text-sm text-gray-700 font-medium hover:text-indigo-500"}>Authors</NavLink>
              <NavLink to="/create-post" className={({ isActive }) => isActive ? "block text-sm text-blue-500 font-medium" : "block text-sm text-gray-700 font-medium hover:text-indigo-500"}>New Post</NavLink>
              <NavLink to="/login" className={({ isActive }) => isActive ? "block text-sm text-blue-500 font-medium" : "block text-sm text-gray-700 font-medium hover:text-indigo-500"}>Login</NavLink>
              <NavLink to="/register" className={({ isActive }) => isActive ? "block relative text-blue-500 transition duration-300" : "block relative text-gray-700 hover:text-gray-600 transition duration-300"}>
                <span className="absolute inset-0 transform skew-x-12 bg-indigo-100"></span>
                <span className="relative text-sm font-medium">Sign Up</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav