import React from 'react'

function CategoryPosts() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Category Posts</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Select Category</label>
            <select id="category" name="category" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">All Categories</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
            </select>
          </div>
          <div className="space-y-4">
            {/* Placeholder for posts */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Post Title</h2>
              <p className="text-gray-600 mb-2">Short excerpt of the post...</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </div>
            {/* More post items would be dynamically added here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPosts