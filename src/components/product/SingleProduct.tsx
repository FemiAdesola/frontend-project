import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CssBaseline, Grid, Stack, Paper } from '@mui/material';

import { Container} from '@mui/system';
import axiosInstance from '../../common/axiosInstance';
import { CartProductType, ProductType } from '../../types/product';
import { addToCart } from '../../redux/reducers/cartReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import UpdateProduct from './UpdateProduct';

const SingleProduct = () => {
  let { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductType>()
  const  userInfo = useAppSelector((state) => state.userReducer.currentUser);
  const onAdd = () => {
    dispatch(addToCart(products as CartProductType));
    navigate('/cart');
  };
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
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Paper elevation={0} sx={{
          display: 'flexGrow',
          height: 'auto',
        }}>
          <Grid sx={{display:"flex"}} container pt="20px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid>
              <Card sx={{
                maxWidth: 450,
                display: 'block',
                height: 'auto',
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
                    <Typography variant="h6" sx={{ display: 'flex', gap: '5px' }} color="text.secondary">
                      <Typography color="lightcoral">Category: {products?.category.name} </Typography>
                    </Typography>
                    <Typography color="blue" variant="body2">Price: {products?.price}€</Typography>
                    <Typography variant="subtitle2" color="green" sx={{ display: 'flex', gap: '5px' }}>
                      <Typography>Description:</Typography>
                      <Typography color="text.secondary">{products?.description}</Typography>
                    </Typography>
                  </CardContent>
                </CardActionArea>
            </Card>
             <Stack sx={{ m: 1, gap: 1 }} >
              <Button variant="outlined" sx={{ ml: 2, width: '90%' }} component={Link} to={{ pathname: "/products" }}>Back to productlist</Button>
              <Button variant="outlined" sx={{ ml: 2, width: '90%' }} onClick={onAdd}>Add to cart</Button> 
              </Stack>
          </Grid>
              {!userInfo ? (
             null
            ) : ( 
              <Grid sx={{ ml: 10 }}>
                <UpdateProduct
                  id={products?.id}
                  previousTitle={products?.title}
                  previousDescription={products?.description}
                  previousPrice={products?.price}
                  previousImage={products?.images} />
                </Grid>
           )} 
          </Grid>
        </Paper> 
    </Container>
  )
}

export default SingleProduct
   