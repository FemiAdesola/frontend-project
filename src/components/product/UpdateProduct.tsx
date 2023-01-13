import React, { useEffect, useState } from 'react'
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
import { ProductType, UpdateProductType } from '../../types/product';
import { getAllProducts, updateProduct } from '../../redux/methods/productMethod';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../common/axiosInstance';


const UpdateProduct = () => {
    let { id } = useParams()
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [refresh, setRefresh] = useState<boolean>(false);
  const [productTitle, setProductTitle] = useState("")
  const [productDescription, setProductDescription]= useState("")
  const [productPrice, setProductPrice]= useState<number>(0)
  const [productCategoryId, setProductCategoryId] = useState<number>(0)
  const [productImages, setProductImages] = useState<string>("")
  const [getUrlImages, setGetUrlImages]= useState<FileList | null>(null);
  const [message, setMessage] = useState("")
  // const { handleSubmit, register, formState: { errors } } = useForm<UpdateProductType>({
  //   resolver: yupResolver(productSchema)
  // })
  //  const onsubmit: SubmitHandler<UpdateProductType> = data => {
  //   dispatch(updateProduct(data))
  //  }

  // const onsubmit: SubmitHandler<UpdateProductType> = data => {
  //   const update = {
  //     title: data.update.title,
  //     description: data.update.description,
  //     // id: data.id === '' ? null : data.password,
  //     image: data.update.images,
  //     price: data.update.price
  //   };
  //   axiosInstance
  //     .put(`products/${id}`, update)
  //     .then((res) => {
  //       if ("error" in res) {
  //         setMessage("Failed to create  new Product data (Invalid Data");
  //       } else {
  //         navigate("/products");
  //       }
  //       setRefresh((prev) => (prev = !prev));
  //     })
  //     .catch((err) => (console.log(err)));
  //  }
   
  // const [products, setProducts] = useState<ProductType>()

  // useEffect(() => {
  //   const singleProductDetails = async () => {
  //     try {
  //       const res = await axiosInstance.get<ProductType>(`products/${id}`);
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     } 
  //   };
  // singleProductDetails();
  // }, [id]);


  const updateProductHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      dispatch(getAllProducts())
     dispatch(updateProduct(
       {
         id: 2,
         update: {
          title: productTitle,  
          price: productPrice,
          description: productDescription,
          images:  [productImages]
         }
       })).then((data) => {
      if ("error" in data) {
        setMessage("Failed to create  new Product data (Invalid Data");
      } else {
        navigate("/products");
      }
    });
  };

  // useEffect(() => {
  //   if (getUrlImages) {
  //     axiosInstance.post("files/upload", {
  //       file: getUrlImages[0]
  //     }, { headers: { "Content-Type": "multipart/form-data" } })
  //       .then(response => setProductImages(response.data.location))} 
  // }, [getUrlImages])
  
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
          // onSubmit={handleSubmit(onsubmit)} 
          onSubmit={updateProductHandler} 
        >
          <Grid 
            component="span"
            marginTop={2}
            display= "block"
            >Product title:
          </Grid>
          <TextField
            //  {...register("update.title")}
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
            //  {...register("update.price")}
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
            //  {...register("update.description")}
               value={productDescription}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProductDescription(e.target.value)} //  {...register("productCreate.description")}
                multiline
                rows={4}
                fullWidth
          />
          {/* <Grid 
            component="span"
            marginTop={2}
            display= "block"
            >CategoryId:
          </Grid>
              <TextField
                required 
            type="number" 
             {...register("update.price")}
            //   value={productCategoryId | 0}
            // onChange={(e: { target: { value: string; }; }) => setProductCategoryId(parseInt(e.target.value))}  
                fullWidth
              /> */}
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
              //  onChange={(e: React. ChangeEvent<HTMLInputElement>)=>setGetUrlImages(e.currentTarget.files)}
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
            // onClick={updateTheProduct}
          >update Product</Button> 
      </Box>
        {message}
      </Grid>
    </Container>
  )
}

export default UpdateProduct