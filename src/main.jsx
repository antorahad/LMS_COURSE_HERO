import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import AllCourse from './pages/AllCourse';
import CourseDetails from './pages/CourseDetails'
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import { HelmetProvider } from 'react-helmet-async';
import Error from './Error/Error';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/course',
        element: <AllCourse />,
      },
      {
        path: '/course/:id',
        element: <CourseDetails />,
        loader: () => fetch('/courses.json')
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: () => fetch('/blogs.json')
      },
      {
        path: '/blog/:id',
        element: <BlogDetails />,
        loader: () => fetch('/blogs.json')
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />,
        loader: () => fetch('/courses.json')
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </HelmetProvider>

)
