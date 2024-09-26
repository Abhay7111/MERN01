import React from 'react'

function Home() {
  const blogPosts = [
    {
      id: 1,
      image: "https://cdn.dribbble.com/userupload/4499318/file/original-6a3634063978a590a0d3022f20317fc1.png?resize=450x338&vertical=center",
      title: "Exploring UI Design Trends",
      description: "Discover the latest UI design trends shaping the digital landscape in 2023.",
      author: {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      categories: ["UI Design", "Trends"]
    },
    {
      id: 2,
      image: "https://cdn.dribbble.com/userupload/4395165/file/original-e5431502cd839e6e9463186355a93ecf.png?resize=450x338&vertical=center",
      title: "The Art of Color Theory",
      description: "Dive deep into color theory and its application in modern web design.",
      author: {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      categories: ["Color Theory", "Web Design"]
    },
    {
      id: 3,
      image: "https://cdn.dribbble.com/userupload/9202080/file/original-888ac1d85cb6013339f52d14f2617586.jpg?resize=400x300&vertical=center",
      title: "Minimalism in Web Design",
      description: "Learn how to create impactful websites using minimalist design principles.",
      author: {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      },
      categories: ["Minimalism", "Web Design"]
    },
    {
      id: 4,
      image: "https://cdn.dribbble.com/userupload/4716686/file/original-c64cd81c6fe945ba8555cfb7b8f3805f.png?resize=450x338&vertical=center",
      title: "Typography in Digital Media",
      description: "Explore the importance of typography in creating engaging digital experiences.",
      author: {
        name: "Emily Brown",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      categories: ["Typography", "Digital Media"]
    },
    {
      id: 5,
      image: "https://cdn.dribbble.com/userupload/7410305/file/original-9f9fccdff547f90a5354c84b50a72ccf.png?resize=400x300&vertical=center",
      title: "The Future of UX Design",
      description: "Peek into the future of UX design and upcoming trends in user experience.",
      author: {
        name: "Michael Lee",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
      },
      categories: ["UX Design", "Future Trends"]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Design Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.01] hover:shadow-xl">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-4" />
                  <span className="text-gray-700 font-medium">{post.author.name}</span>
                </div>
                <div className="flex flex-wrap mb-4">
                  {post.categories.map((category, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{category}</span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home