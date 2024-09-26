import React from 'react'

function EditPost() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Edit Post</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input type="text" id="title" name="title" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
            <textarea id="content" name="content" rows="6" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL</label>
            <input type="url" id="image" name="image" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Update Post</button>
            <button type="button" className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Delete Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPost