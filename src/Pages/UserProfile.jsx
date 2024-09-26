import React from 'react'
import { NavLink } from 'react-router-dom'

function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
          <div className="mb-4">
            <img src="https://cdn.dribbble.com/userupload/15513631/file/original-5bcae1f588c45e3ce423136072afe2a8.jpg?resize=400x300&vertical=center" alt="Profile" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">John Doe</h2>
            <p className="text-gray-600 text-center">john.doe@example.com</p>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="mt-6 text-center">
            <NavLink to="/edit-profile" className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg">Edit Profile</NavLink>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">My Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This is a placeholder for the user's posts. You'll need to fetch and map through the actual posts data */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 ">
              <img src="https://cdn.dribbble.com/userupload/10941308/file/original-6a092c5098e154ac555518546b7931b4.png?crop=0x0-3201x2401&resize=450x338&vertical=center" alt="Post thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Sample Post Title</h3>
                <p className="text-gray-600 text-sm mb-2">Posted on: June 1, 2023</p>
                <p className="text-gray-700">This is a brief excerpt of the post content...</p>
                <div className="mt-4 text-center">
                  <NavLink to="/post/1" className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg">Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
              <img src="https://cdn.dribbble.com/userupload/14439153/file/original-f0dec1f8fe57e0c79671db549bc3df82.png?resize=450x338&vertical=center" alt="Post thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Another Sample Post</h3>
                <p className="text-gray-600 text-sm mb-2">Posted on: May 15, 2023</p>
                <p className="text-gray-700">This is another brief excerpt of post content...</p>
                <div className="mt-4 text-center">
                  <NavLink to="/post/2" className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg">Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
              <img src="https://cdn.dribbble.com/userupload/16456701/file/original-5b0294bd8c5ee36655ff9c887995ecf4.png?resize=450x338&vertical=center" alt="Post thumbnail" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Third Sample Post</h3>
                <p className="text-gray-600 text-sm mb-2">Posted on: April 30, 2023</p>
                <p className="text-gray-700">This is a third brief excerpt of post content...</p>
                <div className="mt-4 text-center">
                  <NavLink to="/post/3" className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg">Read More</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile