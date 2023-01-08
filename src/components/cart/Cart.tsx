import React from 'react'
import Typography from '@mui/material/Typography';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  ImageListItem,
  List,
  ListItem
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/reducers/cartReducer';

const Cart = () => {
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector((state) => state.cartReducer);

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      {
        cartItems.length === 0 ? (
          <>
            <Typography variant="h5">No item in your cart</Typography>
            <Button variant="outlined" sx={{ ml: 10, mt: 1 }} component={Link} to={{ pathname: `/products` }}>Back to productlist
            </Button>
          </>  
        ) : (
            <Grid container pt="50px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                cartItems.map((cartItem) => (
                  <Box key={cartItem.id} sx={{width:"100%", pl:5}} >
                  <List key={cartItem.id} sx={{display:"flex"}}>
                    <ImageListItem sx={{ width: 100, height: 100, mr: 4}} >
                      <img src={cartItem.images[0]} alt={cartItem.title }/>
                    </ImageListItem>
                    <List  key={cartItem.id} sx={{display:"block"}}>
                    <ListItem disablePadding>Title: {cartItem.title}</ListItem>
                      <ListItem disablePadding>
                        Quantity: {cartItem.amount}
                        <AddCircleIcon sx={{color:"green"}} onClick={() => dispatch(addToCart(cartItem))} />
                        <RemoveCircleIcon sx={{color:"red"}} onClick={() => dispatch(removeFromCart(cartItem))} />
                      </ListItem>
                      <ListItem disablePadding>Total price: {(cartItem.price * cartItem.amount).toLocaleString()} €</ListItem>
                    </List>
                    </List>
                    </Box>
                ))
              }
              <Card sx={{display:"flex"}}>
                <Card sx={{ maxWidth: 345, mr:2 }}>
                  <CardContent>
                    <Typography variant="h5">SubTotal:
                      {(cartItems.reduce((acc, cartItem) => acc + cartItem.amount, 0)) <= 1 ? 
                        `${(cartItems.reduce((acc, cartItem) => acc + cartItem.amount, 0))} product` :
                        `${(cartItems.reduce((acc, cartItem) => acc + cartItem.amount, 0))} products`}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography variant="h5">Total Price: {cartItems.reduce((acc, cartItem)=> acc + cartItem.price * cartItem.amount, 0).toLocaleString()} €</Typography>
                  </CardContent>
                  </Card>
              </Card>
              <>
              <Button variant="outlined" sx={{ ml: 10, mt: 1 }} component={Link} to={{ pathname: `/products` }}>Get more products
              </Button>
              </>
            </Grid>
        )
      }
    </Container>
  )
}

export default Cart
