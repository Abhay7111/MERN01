import React from 'react'

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-10 transform hover:scale-105 transition duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Create Account</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300" required placeholder="Choose a username" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300" required placeholder="you@example.com" />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300" required placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105">Sign Up</button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default Register