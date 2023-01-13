import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { CategoryType } from '../../types/category';

const CategoryCard = ({name,image}: CategoryType) => {
  return (
    <Card
      sx={{
        maxWidth: 340,
        margin: '10px',
        display: 'flex',
        height: 'auto',
      }}>
      <CardActionArea
      component={Link}
      to={{ pathname: `/products` }}>
        <CardMedia
          component="img"
          sx={{
            width:"400px",
              height: 'auto',
              maxWidth: '100%',
              objectFit: 'cover',
          }}
          image={image}
        />
        <CardContent>
          <Typography 
            fontFamily="cursive"
            textAlign="center"
            variant="h4" component="div"
          >{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CategoryCard