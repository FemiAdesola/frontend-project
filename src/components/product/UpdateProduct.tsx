import React, { useEffect, useState } from 'react'
import {
  TextField,
  Box,
  Button,
  CssBaseline,
  Typography, 
  Container,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/reduxHook';
import { UpdateProductProps, UpdateValueType } from '../../types/product';
import { updateProduct } from '../../redux/methods/productMethod';
import axiosInstance from '../../common/axiosInstance';

const UpdateProduct = ({id, previousTitle, previousDescription, previousImage, previousPrice}:UpdateProductProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [productTitle, setProductTitle] = useState(previousTitle)
  const [productDescription, setProductDescription]= useState(previousDescription)
  const [productPrice, setProductPrice] = useState<number>(previousPrice)
  const [previousValue, setPreviousValue] = useState(false)
  const [productImages, setProductImages] = useState<string>(previousImage)
  const [getUrlImages, setGetUrlImages]= useState<FileList | null>(null);
  const [message, setMessage] = useState("")
  const handleChange = () => {
    setPreviousValue(!previousValue)
    if (previousValue === false) {
      setProductTitle(previousTitle)
      setProductDescription(previousDescription)
      setProductPrice(Number(previousPrice))
    }
  }
  const editProduct = () => {
    if (productPrice <= 0 || isNaN(productPrice)) {
      setMessage("Re-enter the product price");
    }
    const newProductUpdate: UpdateValueType = {
      id: id,
      title: productTitle,
      description: productDescription,
      price: productPrice,
      images: [productImages]
    }
    dispatch(updateProduct(newProductUpdate)).then((data) => {
        if ("error" in data) {
          setMessage("Failed to create  new Product data (Invalid Data");
        } else {
          navigate("/products");
        }
    });
   navigate(`/products`)
  }
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
        >Update product
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
          onSubmit={handleChange} 
        >
          <Grid 
            component="span"
            marginTop={2}
            display= "block"
            >Product title:
          </Grid>
          <TextField
             value={productTitle? productTitle : previousTitle}
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
            value={productPrice?productPrice:previousPrice}
            onChange={(e: { target: { value: string; }; }) => setProductPrice(parseInt(e.target.value))}
            fullWidth
          />
          <Grid 
            component="span"
            marginTop={3}
            display= "block"
            >Product Description:
          </Grid>
          <TextField
          value={productDescription?productDescription:previousDescription}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProductDescription(e.target.value)} 
                rows={4}
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
            onClick={editProduct}
          >update Product</Button> 
      </Box>
        {message}
      </Grid>
    </Container>
  )
}

export default UpdateProduct