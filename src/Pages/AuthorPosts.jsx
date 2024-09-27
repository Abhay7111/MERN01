import React from 'react'

function AuthorPosts() {
  const posts = [
    {
      id: 1,
      title: "The Art of React Development",
      excerpt: "Exploring best practices and advanced techniques in React...",
      link: "#"
    },
    {
      id: 2,
      title: "Understanding Redux State Management",
      excerpt: "A deep dive into Redux and its role in complex React applications...",
      link: "#"
    },
    {
      id: 3,
      title: "CSS-in-JS: Styled Components vs. Emotion",
      excerpt: "Comparing popular CSS-in-JS libraries for React styling...",
      link: "#"
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      excerpt: "Tips and tricks to boost your React application's performance...",
      link: "#"
    }
  ];

  const author = {
    name: "John Doe",
    bio: "Experienced React developer and technical writer"
  };

  const categories = [
    "React", "JavaScript", "Web Development", "Frontend"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Author Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              </div>
              <div className="px-6 pb-4">
                <a href={post.link} className="inline-block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm">Read more</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">About the Author</h2>
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src="https://cdn.dribbble.com/userupload/13948757/file/original-b3b6a11638828334b852fcbc1c572664.jpg?resize=1024x729" alt={author.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{author.name}</h3>
              <p className="text-sm text-gray-600">{author.bio}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Popular Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{category}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorPosts