import React from 'react'
import { NavLink } from 'react-router-dom'

function Authors() {
  const authors = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://cdn.dribbble.com/userupload/11551505/file/original-52ffeca34064ac2e1bc63edd91c34310.jpg?crop=0x167-2000x1667&resize=400x300&vertical=center',
      description: 'Tech enthusiast and software developer',
      postsCount: 10,
      profileLink: '#',
      gradientClass: 'from-blue-300 to-purple-300', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://cdn.dribbble.com/userupload/9939167/file/original-f484b4405694e2c5c7ad3bfde58b43a2.jpg?crop=0x432-1728x1728&resize=320x240&vertical=center',
      description: 'Travel blogger and photographer',
      postsCount: 15,
      profileLink: '#', 
      gradientClass: 'from-green-300 to-yellow-300',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      image: 'https://cdn.dribbble.com/userupload/13443861/file/original-c2b2896f7f7b5d987ce5be8d3351bb18.jpg?crop=0x1264-3239x3693&resize=320x240&vertical=center',
      description: 'Food critic and culinary expert',
      postsCount: 20, 
      profileLink: '#',
      gradientClass: 'from-red-300 to-orange-300',
    },
    {
      id: 4,
      name: 'Bob Brown',
      image: 'https://cdn.dribbble.com/userupload/13948756/file/original-b05dbacf24f5e32961d1d50e19949c0a.jpg?resize=400x300&vertical=center',
      description: 'Fitness coach and nutritionist',
      postsCount: 25, 
      profileLink: '#',
      gradientClass: 'from-pink-300 to-rose-300',
    },
    {
      id: 5,
      name: 'Emily Davis',
      image: 'https://cdn.dribbble.com/userupload/13781778/file/original-e40d94fea0e8060ec9d52f02f2d058ea.jpg?resize=320x240&vertical=center',
      description: 'Fashion designer and trendsetter',
      postsCount: 18, 
      profileLink: '#',
      gradientClass: 'from-indigo-300 to-blue-300',
    },
    {
      id: 6,
      name: 'Michael Wilson',
      image: 'https://cdn.dribbble.com/userupload/15513133/file/original-b073f027b3062e448bdceceeea5e30e2.jpg?resize=320x240&vertical=center',
      description: 'Movie critic and film enthusiast',
      postsCount: 22, 
      profileLink: '#',
      gradientClass: 'from-yellow-300 to-orange-300',
    },
    {
      id: 7,
      name: 'Sarah Taylor',
      image: 'https://cdn.dribbble.com/userupload/13804476/file/original-b95be2fe0ff087dea904ac75e179308b.jpg?resize=400x300&vertical=center',
      description: 'Environmental activist and writer',
      postsCount: 12, 
      profileLink: '#',
      gradientClass: 'from-purple-300 to-pink-300',
    },
  ];

  const handleViewPosts = (id) => {
    console.log(`Viewing posts for author with ID: ${id}`);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-10 text-white">Meet Our Authors</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {authors.map((author, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
              <div className={`h-20 sm:h-24 ${author.gradientClass}`}></div>
              <div className="p-3 sm:p-4">
                <NavLink to={author.profileLink}>
                  <img src={author.image} alt={author.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-2 -mt-10 sm:-mt-12 border-2 border-white object-cover cursor-pointer" />
                </NavLink>
                <h2 className="text-base sm:text-lg font-semibold text-center mb-1 text-gray-800">{author.name}</h2>
                <p className="text-xs text-gray-600 text-center mb-2 line-clamp-2">{author.description}</p>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-500">Posts: {author.postsCount}</span>
                </div>
                <button onClick={() => handleViewPosts(author.id)} className="w-full py-1 px-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition duration-300">View Posts</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Authors