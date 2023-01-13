import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CssBaseline, Stack } from '@mui/material';

import { Container} from '@mui/system';
import axiosInstance from '../../common/axiosInstance';
import { CartProductType, ProductType } from '../../types/product';
import { addToCart } from '../../redux/reducers/cartReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';

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
  const updateHandler = () => {
    navigate(`update`);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Card sx={{
          maxWidth: 450,
          display: 'block',
          height: 'auto',
      }}>
        <Card>
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
          {!userInfo ? (
            <> 
          <Button variant="outlined" sx={{ ml: 2, width: '90%' }} component={Link} to={{ pathname: "/products" }}>Back to productlist</Button>
          </>
          ) : (
          <>
          <Button variant="outlined" sx={{ ml: 2, width: '90%' }} component={Link} to={{ pathname: "/products" }}>Back to productlist</Button>
          <Button variant="outlined" sx={{ ml: 2, width: '90%' }} onClick={onAdd}>
            Add to cart
          </Button>
          <Button variant="outlined" sx={{ ml: 2, width: '90%' }} onClick={updateHandler}>
            Update
          </Button>
          </>
            )}
          </Stack>
        </Card>   
    </Container>
  )
}

export default SingleProduct