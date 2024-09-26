import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-800">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 text-xl font-bold transition duration-300" : "text-gray-800 text-xl font-bold hover:text-gray-700 transition duration-300"}>Blog Explorer</NavLink>
            </div>
            <div className="md:hidden">
              <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink to="/" className={({ isActive }) => isActive ? "my-1 text-sm text-blue-500 font-medium md:mx-4 md:my-0" : "my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"}>Home</NavLink>
              <NavLink to="/authors" className={({ isActive }) => isActive ? "my-1 text-sm text-blue-500 font-medium md:mx-4 md:my-0" : "my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"}>Authors</NavLink>
              <NavLink to="/create-post" className={({ isActive }) => isActive ? "my-1 text-sm text-blue-500 font-medium md:mx-4 md:my-0" : "my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"}>New Post</NavLink>
              <NavLink to="/login" className={({ isActive }) => isActive ? "my-1 text-sm text-blue-500 font-medium md:mx-4 md:my-0" : "my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"}>Login</NavLink>
            </div>
            <div className="flex justify-center md:block">
              <NavLink to="/register" className={({ isActive }) => isActive ? "relative text-blue-500 transition duration-300" : "relative text-gray-700 hover:text-gray-600 transition duration-300"}>
                <span className="absolute inset-0 transform skew-x-12 bg-indigo-100"></span>
                <span className="relative text-sm font-medium">Sign Up</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav