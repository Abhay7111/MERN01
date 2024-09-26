import React from 'react'

function Home() {
  const blogPosts = [
    {
      id: 1,
      image: "https://cdn.dribbble.com/userupload/4499318/file/original-6a3634063978a590a0d3022f20317fc1.png?resize=450x338&vertical=center",
      title: "Exploring UI Design Trends",
      description: "Discover the latest UI design trends shaping the digital landscape in 2023.",
    },
    {
      id: 2,
      image: "https://cdn.dribbble.com/userupload/4395165/file/original-e5431502cd839e6e9463186355a93ecf.png?resize=450x338&vertical=center",
      title: "The Art of Color Theory",
      description: "Dive deep into color theory and its application in modern web design.",
    },
    {
      id: 3,
      image: "https://cdn.dribbble.com/userupload/9202080/file/original-888ac1d85cb6013339f52d14f2617586.jpg?resize=400x300&vertical=center",
      title: "Minimalism in Web Design",
      description: "Learn how to create impactful websites using minimalist design principles.",
    },
    {
      id: 4,
      image: "https://cdn.dribbble.com/userupload/4716686/file/original-c64cd81c6fe945ba8555cfb7b8f3805f.png?resize=450x338&vertical=center",
      title: "Typography in Digital Media",
      description: "Explore the importance of typography in creating engaging digital experiences.",
    },
    {
      id: 5,
      image: "https://cdn.dribbble.com/userupload/7410305/file/original-9f9fccdff547f90a5354c84b50a72ccf.png?resize=400x300&vertical=center",
      title: "The Future of UX Design",
      description: "Peek into the future of UX design and upcoming trends in user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Design Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
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