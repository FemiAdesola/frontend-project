import React, { useState, useEffect } from 'react'
import {
  TextField,
  Box,
  Button,
  CssBaseline,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { createProduct } from '../../redux/methods/productMethod';
import { useAppDispatch} from '../../hooks/reduxHook';
import { useNavigate} from 'react-router-dom';
import axiosInstance from '../../common/axiosInstance';

const CreateProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [productTitle, setProductTitle] = useState("")
  const [productDescription, setProductDescription]= useState("")
  const [productPrice, setProductPrice]= useState<number>(0)
  const [productCategoryId, setProductCategoryId] = useState<number>(0)
  const [productImages, setProductImages] = useState<string>("")
  const [getUrlImages, setGetUrlImages]= useState<FileList | null>(null);
  const [message, setMessage] = useState("")

  const createProductHandler = (e:React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     dispatch(createProduct(
      {   title: productTitle,    
          price: productPrice,
          description: productDescription,
          categoryId: productCategoryId,
          images:  [productImages]
     })).then((data) => {
      if ("error" in data) {
        setMessage("Failed to create  new Product data (Invalid Data");
      } else {
        navigate("/products");
      }
    });
  };
  useEffect(() => {
    if (getUrlImages) {
      axiosInstance.post("files/upload", {
        file: getUrlImages[0]
      }, { headers: { "Content-Type": "multipart/form-data" } })
        .then(response => setProductImages(response.data.location))} 
  }, [getUrlImages])
  
  return (
    <Container maxWidth="sm">
     <CssBaseline />
      <Typography 
        fontFamily="cursive"
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
          onSubmit={createProductHandler} 
        >
          <Grid 
            component="span"
            marginTop={2}
            display= "block"
            >Product title:
          </Grid>
              <TextField
             value={productTitle}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProductTitle(e.target.value)}
                type="text" 
                fullWidth
          />
          <Grid 
            component="span"
            marginTop={2}
            display= "block"
            >Price:
          </Grid>
          <TextField
            type="number" 
              value={productPrice }
            onChange={(e: { target: { value: string; }; }) => setProductPrice(parseInt(e.target.value))}// {...register("productCreate.price")}
            fullWidth
          />
          <Grid 
            component="span"
            marginTop={3}
            display= "block"
            >Product Description:
          </Grid>
              <TextField
               value={productDescription}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProductDescription(e.target.value)} //  {...register("productCreate.description")}
                multiline
                rows={4}
                fullWidth
          />
          <Grid 
            component="span"
            marginTop={2}
            display= "block"
            >CategoryId:
          </Grid>
              <TextField
                required 
            type="number" 
              value={productCategoryId | 0}
            onChange={(e: { target: { value: string; }; }) => setProductCategoryId(parseInt(e.target.value))}  
                fullWidth
              />
          <Grid 
            component="span"
            marginTop={2}
            display= "block"
            >Upload images:
          </Grid>
          <Grid component="div">
            <TextField
          variant="outlined"
          InputLabelProps={{  style: { fontSize: 30, borderColor:"none" }, shrink: true }}
          fullWidth
          margin="normal"
             type="file"
              name="file"
              inputProps={{multiple: true}}
               onChange={(e: React. ChangeEvent<HTMLInputElement>)=>setGetUrlImages(e.currentTarget.files)}
          sx={{
            "& label.Mui-focused": {
              display: "none",
            },
            "& legend": {
              display: "none",
            }
          }}
        />
      </Grid>
          <Button 
            type="submit"
            variant="outlined"
            sx={{ ml: 2, width: '90%' }}
          >Add Product</Button> 
      </Box>
        {message}
      </Grid>
    </Container>
  )
}

export default CreateProducts