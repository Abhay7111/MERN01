import React from 'react'

function PostDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Post Title</h1>
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/40" alt="Author" />
            <div>
              <p className="text-gray-900 font-semibold">Author Name</p>
              <p className="text-gray-600 text-sm">Published on: Date</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p>This is where the post content will go. It can include paragraphs, headings, lists, and other formatted text.</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Categories</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Category 1</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Category 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails