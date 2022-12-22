import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div>
          <ul>
              <Link to="">Home</Link>
              <Link to="products">Products</Link>
              <Link to="profile">Profile</Link>
              <Link to="cart">Cart</Link>
          </ul>
    </div>
  )
}

export default Header