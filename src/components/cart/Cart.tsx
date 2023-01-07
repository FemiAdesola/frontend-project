import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import { Container, CssBaseline, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { getCartProducts, getTotalPrice, removeFromCart } from '../../redux/methods/cartMethod';
import ProductCard from '../product/ProductCard';

const Cart = () => {
  const cartProducts = useAppSelector(getCartProducts)
  const totalPrice = useAppSelector(getTotalPrice)
  const dispatch = useAppDispatch()
  const handleRemoveFromCart = (productId: number) => dispatch(removeFromCart(productId))
console.log(totalPrice)
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Typography component="div" variant='h2'>Cart</Typography>
      <Typography component="div" variant='h5'>{totalPrice}</Typography>
      <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cartProducts.map((product) =>
          // <ProductCard
          //   key={product.id}
          //   product={product.amount}
          //   handleRemoveFromCart={handleRemoveFromCart}
          // />
            
        <ul key={product.id}>
          <span>{ product.title}</span>
          <span>{product.amount}</span>
          <span>{product.price}</span>
          <button onClick={()=>handleRemoveFromCart(product.id) }>Remove from cart</button>
        </ul>
        
        )}
      </Grid>
    </Container>
  )
}

export default Cart