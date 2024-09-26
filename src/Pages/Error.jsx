import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function Error() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 sm:p-8">
          <svg className="w-24 h-24 mx-auto mb-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Oops! Page Not Found</h1>
          <p className="text-gray-600 mb-6 text-center">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex justify-center space-x-4">
            <button 
              className="px-6 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <NavLink 
              to="/"
              className="px-6 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Home
            </NavLink>
          </div>
        </div>
      </div>
      <p className="mt-8 text-gray-500 text-sm">If you believe this is a mistake, please contact our support team.</p>
    </div>
  )
}

export default Error