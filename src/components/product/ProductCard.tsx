import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

const ProductCard = ({id, title, price, images, description, category }: Product) => {
  return (
      <Card sx={{
          maxWidth: 340,
          margin: '10px',
          display: 'flex',
          height: '450px',
      }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                  objectFit: 'cover',
              }}
                  image={images[0]}
              />
            <CardContent>
              <Typography variant="h5" component="div">{title}</Typography>
              <Typography variant="subtitle1" sx={{display:'flex', gap:'5px'}} color="text.secondary">
                <Typography  color="lightcoral">Category: {category.name} </Typography>
              </Typography>
              <Typography color ="blue" variant="body1" component="div">Price: {price}€</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography> 
            <Typography
              component={Link}
              to={{ pathname: `/products/${id}` }}
                // to="products"
              marginRight={5}
              sx={{
                extDecoration: 'none',
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'bold',
                "&:hover": {
                  color: "green",
                }        
            }}
            >Get Details</Typography>
          </CardContent>
        </CardActionArea>
       </Card>
  )
}

export default ProductCard