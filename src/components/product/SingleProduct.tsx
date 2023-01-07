import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CssBaseline } from '@mui/material';

import { Container } from '@mui/system';
import axiosInstance from '../../common/axiosInstance';
import { ProductType } from '../../types/product';
import Box from '@mui/material/Box';

const SingleProduct = () => {
  let {id} = useParams()
  const [products, setProducts]=useState<ProductType>()
  useEffect(() => {
    const singleProductDetails = async () => {
      try {
        const res = await axiosInstance.get<ProductType>(`products/${id}`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      } 
    };
  singleProductDetails();
  }, [id]);
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
      <Card sx={{
        maxWidth: 400,
        margin: '10px',
        display: 'flex',
        height: '600px',
      }}>
        <CardActionArea >
          <CardMedia
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              objectFit: 'cover',
            }}
            image={products?.images[0]}
          />
          <CardContent>
            <Typography variant="h5" component="div">{products?.title}</Typography>
            <Typography variant="h6" sx={{display:'flex', gap:'5px'}} color="text.secondary">
              <Typography  color="lightcoral">Category: {products?.category.name} </Typography>
            </Typography>
            <Typography color ="blue" variant="body2">Price: {products?.price}€</Typography>
            <Typography  variant="subtitle2" color="green" sx={{ display: 'flex', gap: '5px' }}>
              <Typography>Description:</Typography>
              <Typography color="text.secondary">{products?.description}</Typography> 
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" sx={{ml:10, mt:1}} component={Link}to={{ pathname: `/products`}}>Back to productlist</Button>
           </CardActions>
        </CardActionArea>
      </Card>
    </Container>
  )
}

export default SingleProduct