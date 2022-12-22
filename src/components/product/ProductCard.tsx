import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Product } from '../../types/product';
import { Category } from '../../types/category';

const ProductCard = ({title, price, images, description}: Product) => {
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
                   <Typography color ="blue" variant="body1" component="div">Price: {price}€</Typography>
                  <Typography variant="body2" color="text.secondary">{description}</Typography>
                  {/* <Typography variant="body2" color="text.secondary">{Category.name}</Typography> */}
            </CardContent>
        </CardActionArea>
       </Card>
      
  )
}

export default ProductCard