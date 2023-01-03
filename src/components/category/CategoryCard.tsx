import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CategoryType } from '../../types/category';
import { Link } from 'react-router-dom';

const CategoryCard = ({ id,name,image}: CategoryType) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: '10px',
        display: 'flex',
        height: '300px',
      }}>
      <CardActionArea
      component={Link}
      to={{ pathname: `/products` }}>
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            maxWidth: '100%',
            objectFit: 'cover',
          }}
          image={image}
        />
        <CardContent>
          <Typography variant="h5" component="div">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CategoryCard