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

import { createProductWithImages} from '../../redux/methods/productMethod';
import { useAppDispatch } from '../../hooks/reduxHook';
import { CreateProductWithImages } from '../../types/product';

const CreateProducts = () => {
  const [productTitle, setProductTitle] = useState("")
  const [productDescription, setProductDescription]= useState("")
  const [productPrice, setProductPrice]= useState(0)
  const [productCategoryId, setProductCategoryId] = useState(0)
  const [productImages, setProductImages] = useState<File[] | null>(null)
  const dispatch = useAppDispatch();

  const imagesHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files
    let fileArray = [];
    if (files?.length) {
      for (let i = 0; i <= files?.length; i++) {
        fileArray.push(files[i])
      }
    }
    setProductImages(fileArray)
  }
  useEffect(() => {
    setProductTitle("")
    setProductDescription("")
    setProductPrice(0)
    setProductCategoryId(0)
    setProductImages(null)
  }, [])
  const addProductHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let message = []
    if (!productImages && !productTitle && !productDescription && !productCategoryId) {
      return message.push("title,description,id,category is required")
    }
    // dispatch(createProductWithImages({
    //   image:productImages,
    //   productCreate: {
    //     title: productTitle,
    //     description: productDescription,
    //     price: productPrice,
    //     categoryId: productCategoryId,
    //     images: productImages,
    //   }
    // }));
    setProductTitle("")
    setProductDescription("")
    setProductPrice(0)
    setProductCategoryId(0)
    setProductImages(null)
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
          onSubmit={addProductHandler}
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
                onChange={(e) => setProductTitle(e.target.value)}
              // onChange={(e) =>changeHandler(e)}
                value={productTitle}
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
            // onChange={changeHandler}
                onChange={(e) => setProductPrice(parseInt(e.target.value))}
                value={productPrice}
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
                onChange={(e) => setProductDescription(e.target.value)}
            // onChange={changeHandler}
                value={productDescription}
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
                onChange={(e) => setProductCategoryId(parseInt(e.target.value))}
               value={productCategoryId}
                fullWidth
              />
          <Typography 
            component="span"
            marginTop={2}
            >Upload images:
          </Typography>
            <TextField
                // required 
              type="file"
              name="file"
              inputProps={{multiple: true}}
              onChange={imagesHandler}
              // value={productImages}
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
        </Box>
      </Grid>
    </Container>
  )
}

export default CreateProducts