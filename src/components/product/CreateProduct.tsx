import React, { useState } from 'react'
import {
  TextField,
  Box,
  Button,
  CssBaseline,
  Typography, 
  Container,
  Grid,
} from '@mui/material';

import { createProduct } from '../../redux/methods/productMethod';
import { useAppDispatch } from '../../hooks/reduxHook';
import { CreateProduct } from '../../types/product';


const CreateProducts = ({title, decription, price, categoryId, images}:CreateProduct) => {
  const [addProduct, setAddProduct]= useState({title:"", decription:"", price:0, categoryId:1, images:[]})
  
  const dispatch = useAppDispatch();
 

  const changeHandler = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setAddProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
    const addHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      dispatch(createProduct({
          title: addProduct.title,
          decription: addProduct.decription,
          price: addProduct.price,
          categoryId: addProduct.categoryId,
          images: addProduct.images,
        }));
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
          onSubmit={(e) => addHandler(e)}
          
        >
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >Product title:
          </Typography>
              <TextField
                required 
                type="text" 
                // onChange={(e) => setName(e.target.value)}
              onChange={changeHandler}
                value={title}
                fullWidth
              />
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >Price:
          </Typography>
              <TextField
                required 
            type="number" 
            onChange={changeHandler}
                // onChange={(e) => setName(e.target.value)}
                value={price}
                fullWidth
              />
          <Typography 
            component="span"
            marginTop={3}
            display= "block"
            >Product Description:
          </Typography>
              <TextField
                required
                // onChange={(e) => setDetails(e.target.value)}
            onChange={changeHandler}
                value={decription}
                multiline
                rows={4}
                fullWidth
              />
          <Typography 
            component="span"
            marginTop={2}
            display= "block"
            >CategoryId:
          </Typography>
              <TextField
                required 
                type="number" 
                // onChange={(e) => setName(e.target.value)}
               value={categoryId}
                fullWidth
              />
          <Typography 
            component="span"
            marginTop={2}
            >Upload images:
          </Typography>
              <TextField
                required 
                type="file"
                name="file"
                inputProps={{multiple: true}}
                // onChange={(e) => setName(e.target.value)}
            onChange={changeHandler}
                value={images}
                fullWidth
              />
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
          >Add Product</Button>
          {/* {formError &&
          <Typography 
            component="p"
            sx={{
              color: "red",
              background: "pink",
              border: "1px solid red",
              borderRadius: "4px",
              padding: "8px",
              margin: "10px 0",
            }}
          >
            {formError}
          </Typography>
            }  */}
        </Box>
      </Grid>
    </Container>
  )
}

export default CreateProducts