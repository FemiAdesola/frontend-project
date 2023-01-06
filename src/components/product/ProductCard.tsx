import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { ProductType } from '../../types/product';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHook';
import { addToCart } from '../../redux/methods/cartMethod';


const ProductCard = ({ id, title, price, images, category}: ProductType, product: ProductType) => {
  const dispatch = useAppDispatch()
  // const products = useAppSelector(state => state.productReducer)
  const addToCartHandler = (product:ProductType) =>dispatch(addToCart(product))
  return (
      <Card sx={{
          maxWidth: 340,
          margin: '10px',
          display: 'flex',
          height: '400px',
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width:"400px",
            height: '200px',
            maxWidth: '100%',
            objectFit: 'cover',
          }}
          image={images[0]}
        />
        <CardContent>
          <Typography variant="h6" component="div">{title}</Typography>
          <Typography variant="subtitle1" sx={{display:'flex', gap:'5px'}} color="text.secondary">
            <Typography  color="lightcoral">Category: {category.name} </Typography>
          </Typography>
          <Typography color="blue" variant="body1" component="div">Price: {price}€</Typography>
      
          <Button variant="outlined" sx={{ ml: 1, mt: 0.5 }} component={Link} to={{ pathname: `/products/${id}` }}>Get Details</Button>
            <Button variant="outlined" sx={{ ml: 1, mt: 0.5 }} onClick={ ()=>addToCartHandler(product)}
            >Add to cart</Button>
           
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard