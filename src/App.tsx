import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home';
import Product from './components/product/Product';
import Products from './components/product/Products';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <Product />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App