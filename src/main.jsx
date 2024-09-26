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
    {path: '/post-details/:id', element: <PostDetails />},
    {path: '/user-profile/:id', element: <UserProfile />},
    {path: '/register', element: <Register />},
    {path: '/myposts/:id', element: <Dashboard />},
    {path: '/authors', element: <Authors />},
    {path: '/posts/users/:id', element: <AuthorPosts />},
    {path: '/posts/categories/:category', element: <CategoryPosts />},
    {path: '/posts/:id/edit', element: <EditPost />},
    {path: '/posts/:id/delete', element: <DeletePost />},
    {path: '/create-post', element: <CreatePost />},
    {path: '/login', element: <Login />},
    {path: '/logout', element: <LogOut />},
    ]},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
