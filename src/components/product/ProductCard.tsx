import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

import { ProductType } from '../../types/product';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHook';
import { addToCart } from '../../redux/methods/cartMethod';


const ProductCard = ({ id, title, price, images, category}: ProductType, product:ProductType) => {
  const dispatch = useAppDispatch()
  // const products = useAppSelector(state => state.productReducer)
  const addToCartHandler = (product: ProductType) => dispatch(addToCart(product))
 
  return (
    <Card sx={{
      maxWidth: 340,
      margin: '10px',
      // display: 'flex',
      height: '350px',
    }}>
      <Card>
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
            <Typography variant="body1" component="div">{title}</Typography>
            <Typography variant="subtitle1" sx={{display:'flex', gap:'5px'}} color="text.secondary">
              <Typography  variant="body2" color="lightcoral">Category: {category.name} </Typography>
            </Typography>
            <Typography color="blue" variant="body1" component="div">Price: {price}€</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box sx={{ '& button': { ml: 3}, ml:1.5 }}>
        <Button variant="outlined" sx={{ ml: 0.5, mt: 0.5 }} component={Link} to={{ pathname: `/products/${id}` }}>Get Details</Button>
        <Button variant="outlined" sx={{ ml: 0.5, mt: 0.5 }} onClick={()=>addToCartHandler(product)}
          endIcon={<SendIcon />}>Add to cart
        </Button>
      </Box>
    </Card>
  )
}

export default ProductCard