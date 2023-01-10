import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import {
  TextField,
  Box,
  Button,
  CssBaseline,
  Typography, 
  Container,
  Grid,
} from '@mui/material';

import { useAppDispatch } from '../../hooks/reduxHook';
import { productSchema } from '../../formvalidation/productSchema';
import { UpdateProductType } from '../../types/product';
import { updateProduct } from '../../redux/methods/productMethod';


const UpdateProduct = () => {
    const dispatch = useAppDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm<UpdateProductType>({
    resolver: yupResolver(productSchema)
  })
   const onsubmit: SubmitHandler<UpdateProductType> = data => {
    // console.log((data))
    dispatch(updateProduct(data))
  }
  return (
    <Container maxWidth="sm">
     <CssBaseline />
      <Typography 
        component="h3" 
        variant="h3" 
        marginBottom={3}
       textAlign="center"
        >Create a product
      </Typography>
      <Grid container pt="20px" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Box
          sx={{ 
          width: "100%",
            paddingLeft:"200px",
            marginBottom:"20px",
            padding:"0 60px"
          }}
         
         component="form" onSubmit={handleSubmit(onsubmit)} 
        >
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >Product title:
          </Typography>
              <TextField
             
                type="text" 
                 {...register("update.title")}
                fullWidth
          />
           {/* <Typography component="div" variant="body2" color="red">{errors.productCreate?.title?.message}</Typography> */}
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >Price:
          </Typography>
              <TextField
                
                type="number" 
            // onChange={changeHandler}
               {...register("update.price")}
                fullWidth
          />
          {/* <Typography component="div" variant="body2" color="red">{errors.productCreate?.price?.message}</Typography> */}
          <Typography 
            component="span"
            marginTop={3}
            display= "block"
            >Product Description:
          </Typography>
          
              <TextField
             
               {...register("update.description")}
                multiline
                rows={4}
                fullWidth
          />
           {/* <Typography component="div" variant="body2" color="red">{errors.productCreate?.description?.message}</Typography> */}
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >CategoryId:
          </Typography>
              <TextField
                required 
                type="number" 
                {...register("update.category.id")}
                fullWidth
              />
          <Typography 
            component="span"
            marginTop={2}
            >Upload images:
          </Typography>
          <Typography component="div" sx={{margin:"20px"}}>
        <input 
          type="file"
          multiple
              // {...register("productCreate.images")}
              {...register("update.images")}
        />
      </Typography>
           <Typography component="div" variant="body2" color="red">{errors.update?.images?.message}</Typography>
          <Button 
            type="submit"
            sx={{
                width: "180px",
                height: "50px",
                textTransform: "none",
                backgroundColor: "gray",
                borderRadius: "5px",
                color: "white",
                fontSize:"25px",
                marginTop:"30px",
                "&: hover": {
                  backgroundColor: "#162639",
                  color: "#ffFFFf"
                },
            }}
          >Update Product</Button>
        </Box>
      </Grid>
    </Container>
  )
}

export default UpdateProduct