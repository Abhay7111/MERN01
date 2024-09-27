import React, { useState, useEffect } from 'react';

function CreatePost() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fake data
  const fakeData = {
    recentPosts: [
      { id: 1, name: "The Future of AI", excerpt: "Exploring the potential impact of artificial intelligence..." },
      { id: 2, name: "Web Development Trends", excerpt: "Latest trends in web development for 2023..." },
      { id: 3, name: "Cybersecurity Best Practices", excerpt: "Essential tips to keep your digital life secure..." },
      { id: 4, name: "The Rise of No-Code Platforms", excerpt: "How no-code platforms are changing software development..." }
    ],
    categories: ["Technology", "Web Development", "Artificial Intelligence", "Cybersecurity", "Programming"]
  };

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchData = () => {
      setIsLoading(true);
      setTimeout(() => {
        setRecentPosts(fakeData.recentPosts);
        setCategories(fakeData.categories);
        setIsLoading(false);
      }, 1000); // Simulate 1 second delay
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate post creation
    setTimeout(() => {
      const newPost = {
        id: recentPosts.length + 1,
        name: title,
        excerpt: content.substring(0, 100) + "..."
      };
      setRecentPosts([newPost, ...recentPosts.slice(0, 3)]);
      setTitle('');
      setContent('');
      setCategory('');
      setIsLoading(false);
    }, 1000); // Simulate 1 second delay
  };
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create New Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="sr-only">Content</label>
              <div className="relative">
                <textarea
                  id="content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="12"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Write your blog post here..."
                  required
                ></textarea>
                <div className="absolute top-2 right-2 flex flex-wrap space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content');
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;
                      const selectedText = content.substring(start, end);
                      const newContent = content.substring(0, start) + `# ${selectedText}` + content.substring(end);
                      setContent(newContent);
                    }}
                    className="p-1 rounded bg-gray-200 hover:bg-gray-300 mb-2"
                    title="Add Heading"
                  >
                    H
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content');
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;
                      const selectedText = content.substring(start, end);
                      const newContent = content.substring(0, start) + `**${selectedText}**` + content.substring(end);
                      setContent(newContent);
                    }}
                    className="p-1 rounded bg-gray-200 hover:bg-gray-300 mb-2"
                    title="Bold"
                  >
                    <strong>B</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content');
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;
                      const selectedText = content.substring(start, end);
                      const newContent = content.substring(0, start) + `*${selectedText}*` + content.substring(end);
                      setContent(newContent);
                    }}
                    className="p-1 rounded bg-gray-200 hover:bg-gray-300 mb-2"
                    title="Italic"
                  >
                    <em>I</em>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content');
                      const start = textarea.selectionStart;
                      const newContent = content.substring(0, start) + "\n- " + content.substring(start);
                      setContent(newContent);
                    }}
                    className="p-1 rounded bg-gray-200 hover:bg-gray-300 mb-2"
                    title="Add List Item"
                  >
                    •
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const textarea = document.getElementById('content');
                      const start = textarea.selectionStart;
                      const end = textarea.selectionEnd;
                      const selectedText = content.substring(start, end);
                      const newContent = content.substring(0, start) + `[${selectedText}](url)` + content.substring(end);
                      setContent(newContent);
                    }}
                    className="p-1 rounded bg-gray-200 hover:bg-gray-300 mb-2"
                    title="Add Link"
                  >
                    🔗
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="category" className="sr-only">Category</label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isLoading}>
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              {isLoading ? 'Creating...' : 'Create Post'}
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center uppercase">Recent Posts (Last 24 Hours)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.slice(0, 4).map((post, index) => (
            <div 
              key={post.id || index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => window.location.href = `/post-details/${post.id}`}
            >
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{post.name}</h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CreatePost