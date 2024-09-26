import React from 'react'

function CreatePost() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Create New Post</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
            <input type="text" id="title" name="title" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
            <textarea id="content" name="content" rows="6" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Category</label>
            <select id="category" name="category" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Create Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost