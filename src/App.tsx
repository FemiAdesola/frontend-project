import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Cart from './pages/Cart';

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
        path: 'profile',
        element: <Profile />
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