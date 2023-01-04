import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home';
import SingleProduct from './components/product/SingleProduct';
import Products from './components/product/Products';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import CreateProducts from './components/product/CreateProduct';

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
        element: <SingleProduct />
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
        path: 'create',
         element: <CreateProducts productCreate={...[]} images={[]} />
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