import React from 'react'

function DeletePost() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Delete Post</h1>
        <p className="text-gray-700 text-center mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
            Delete
          </button>
          <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletePost