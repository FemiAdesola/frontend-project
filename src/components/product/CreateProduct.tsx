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

import { createProductWithImages} from '../../redux/methods/productMethod';
import { useAppDispatch} from '../../hooks/reduxHook';
import {  CreateProductWithImages } from '../../types/product';
import { productSchema } from '../../formvalidation/productSchema';
import { useNavigate, useParams } from 'react-router-dom';

const CreateProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
   let { id } = useParams()
  const { handleSubmit, register, formState: { errors } } = useForm<CreateProductWithImages>({
    resolver: yupResolver(productSchema)
  })
   const onsubmit: SubmitHandler<CreateProductWithImages> = data => {
    dispatch(createProductWithImages(data))
   }
  const updateHandler = () => {
    navigate(`products/${id}`);
  };
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
          component="form"
          onSubmit={handleSubmit(onsubmit)} 
        >
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >Product title:
          </Typography>
              <TextField
             
                type="text" 
                 {...register("productCreate.title")}
                fullWidth
          />
           <Typography component="div" variant="body2" color="red">{errors.productCreate?.title?.message}</Typography>
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >Price:
          </Typography>
          <TextField
            type="number" 
            {...register("productCreate.price")}
            fullWidth
          />
          <Typography component="div" variant="body2" color="red">{errors.productCreate?.price?.message}</Typography>
          <Typography 
            component="span"
            marginTop={3}
            display= "block"
            >Product Description:
          </Typography>
          
              <TextField
             
               {...register("productCreate.description")}
                multiline
                rows={4}
                fullWidth
          />
           <Typography component="div" variant="body2" color="red">{errors.productCreate?.description?.message}</Typography>
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >CategoryId:
          </Typography>
              <TextField
                required 
                type="number" 
                {...register("productCreate.categoryId")}
                fullWidth
              />
          <Typography 
            component="span"
            marginTop={2}
            >Upload images:
          </Typography>
          <Typography component="div" sx={{ margin: "20px" }}>
            <TextField
          variant="outlined"
          InputLabelProps={{  style: { fontSize: 30, borderColor:"none" }, shrink: true }}
          fullWidth
          margin="normal"
              type="file" 
             {...register("productCreate.images")}
          sx={{
            "& label.Mui-focused": {
              display: "none",
            },
            "& legend": {
              display: "none",
            }
          }}
        />
      </Typography>
          <Typography component="div" variant="body2" color="red">{errors.images?.message}</Typography>
          <Button 
            type="submit"
            variant="outlined"
            sx={{ ml: 2,  width: '90%'}} 
          >Add Product</Button> 
      </Box>
        <Button component="form" onSubmit={handleSubmit(onsubmit)} variant="outlined" sx={{ ml: -2, width: '72%' }} onClick={updateHandler}>
          Update</Button>
      </Grid>
    </Container>
  )
}

export default CreateProducts