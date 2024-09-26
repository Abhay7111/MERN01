import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Authors from './Pages/Authors';
import PostDetails from './Pages/PostDetails';
import AuthorPosts from './Pages/AuthorPosts';
import CategoryPosts from './Pages/CategoryPosts';
import EditPost from './Pages/EditPost';
import DeletePost from './Pages/DeletePost';
import CreatePost from './Pages/CreatePost';
import UserProfile from './Pages/UserProfile';
import LogOut from './Pages/LogOut';
import Error from './Pages/Error';
import Layout from './Pages/Layout';
const router = createBrowserRouter([
  {path: '/', element: <Layout />,
    errorElement: <Error />,
    children: [
    {path: '', element: <Home />},
  ]},
  {path: '/inbox', element: "hello from /inbox"},
  {path: '/login', element: <Login />},
  {path: '/register', element: <Register />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/authors', element: <Authors />},
  {path: '/post-details', element: <PostDetails />},
  {path: '/author-posts', element: <AuthorPosts />},
  {path: '/category-posts', element: <CategoryPosts />},
  {path: '/edit-post', element: <EditPost />},
  {path: '/delete-post', element: <DeletePost />},
  {path: '/create-post', element: <CreatePost />},
  {path: '/user-profile', element: <UserProfile />},
  {path: '/log-out', element: <LogOut />},
  {path: '/error', element: <Error />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
