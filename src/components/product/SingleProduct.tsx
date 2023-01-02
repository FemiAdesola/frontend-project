import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CssBaseline } from '@mui/material';

// import { Product } from '../../types/product';
import { useParamsId } from '../../types/category';
import { getSingleCategory } from '../../redux/methods/categoryMethod';
import { Container } from '@mui/system';

const SingleProduct = () => {
  let { id } = useParams<useParamsId>()
   const dispatch = useAppDispatch()
  // const product = useAppSelector(state => state.productReducer.find(categories => categories.id))
  const category = useAppSelector(state => state.categoryReducer.find(singlecCategory => singlecCategory.id === id))
  
  // useEffect(() => {
  //     dispatch(getSingleCategory(category, )) 
  //   }, [category, dispatch])
  return (
    // <div>
    //    {/* <div>{product? product?.title: "unknown"}</div>
    //   <div>{product?.price}</div> */}
    //    <div>{category? category?.name: "unknown"}</div>
    //  <div>{category?.image}</div>
    // </div>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
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
                  image={category?.image}
              />
            <CardContent>
              <Typography variant="h5" component="div">{category? category.name: "unknown"}</Typography>
              {/* <Typography variant="subtitle1" sx={{display:'flex', gap:'5px'}} color="text.secondary">
                <Typography  color="lightcoral">Category: {category.name} </Typography>
              </Typography>
              <Typography color ="blue" variant="body1" component="div">Price: {price}€</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>  */}
          {/* <Typography
          component={Link}
        to={{ pathname: `/products/${id}` }}
                            // to="products"
                            marginRight={5}
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.black,
                            fontWeight: 'bold',
                            "&:hover": {
                                color: (theme) => theme.palette.common.black,
                            }
                            
                        }}
          >single</Typography> */}
            </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}

export default SingleProduct