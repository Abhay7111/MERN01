import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LogOut() {
  const navigate = useNavigate()

  useEffect(() => {
    // Perform logout logic here (e.g., clear local storage, reset state, etc.)
    localStorage.removeItem('user')
    // Redirect to home page after a short delay
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-10 transform hover:scale-105 transition duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Logged Out</h2>
        <p className="text-center text-gray-600 mb-8">You have been successfully logged out.</p>
        <p className="text-center text-gray-600">Redirecting to home page...</p>
      </div>
    </div>
  )
}

export default LogOut