import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { ProductType } from '../../types/product';
import { Link } from 'react-router-dom';

const ProductCard = ({id, title, price, images, description, category }: ProductType) => {
  return (
      <Card sx={{
          maxWidth: 340,
          margin: '10px',
          display: 'flex',
          height: '400px',
      }}>
      <CardActionArea
        component={Link}
        to={{ pathname: `/products/${id}`}}>
        <CardMedia
          component="img"
          sx={{
            width:"100%",
            height: 'auto',
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
          <Typography color ="blue" variant="body1" component="div">Price: {price}€</Typography>
          <Button variant="outlined" sx={{ml:10, mt:0.5}} component={Link}to={{ pathname: `/products/${id}`}}>Get Details</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard