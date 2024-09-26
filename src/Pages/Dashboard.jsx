import React from 'react'

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 sm:p-10 transform hover:scale-105 transition duration-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-gray-800">Dashboard</h1>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-blue-100 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-800">Recent Posts</h2>
            <ul className="space-y-2 sm:space-y-3">
              <li className="bg-white p-2 sm:p-3 rounded shadow">Post 1</li>
              <li className="bg-white p-2 sm:p-3 rounded shadow">Post 2</li>
              <li className="bg-white p-2 sm:p-3 rounded shadow">Post 3</li>
            </ul>
          </div>
          <div className="bg-purple-100 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-800">Analytics</h2>
            <div className="space-y-2 sm:space-y-3">
              <p className="flex justify-between text-sm sm:text-base"><span>Total Views:</span> <span className="font-bold">1000</span></p>
              <p className="flex justify-between text-sm sm:text-base"><span>Total Likes:</span> <span className="font-bold">50</span></p>
              <p className="flex justify-between text-sm sm:text-base"><span>Total Comments:</span> <span className="font-bold">30</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard