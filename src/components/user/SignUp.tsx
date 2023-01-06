import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import {
  TextField,
  Box,
  Button,
  CssBaseline,
  Typography, 
  Container,
} from '@mui/material';

import {UserForm} from '../../types/user';
import { SignUpSchema } from '../../formvalidation/signUpSchema';
import { useAppDispatch } from '../../hooks/reduxHook';
import { createUserWithSignUp } from '../../redux/methods/userMethod';


const SignUp = () => {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, formState: { errors } } = useForm<UserForm>({
    resolver: yupResolver(SignUpSchema)
  })
  const onsubmit: SubmitHandler<UserForm> = data => {
    // console.log(data)
    dispatch(createUserWithSignUp(data))
  }

  const redirectInUrl = new URLSearchParams().get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/login";

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Box
          component="form" onSubmit={handleSubmit(onsubmit)} 
          sx={{ 
            maxWidth: "560px",
            margin: "60px auto",
            padding: "40px",
            border: "1px solid #ddd",
            boxShadow: "3px 3px 5px rgba(0,0,0,0.05)",
            alignItems: 'center' ,
          }}
        >
          <Typography component="h2" variant="h2" marginBottom={3}>
          Sign up
          </Typography>
          <Typography component="span" variant="body2" >Email:</Typography>
        <TextField
          {...register("email")}
            variant="outlined"
            InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
            fullWidth
            margin="normal"
            type="email" 
            sx={{
              "& label.Mui-focused": {
                display: "none",
              },
              "& legend": {
                display: "none",
              }
            }}
        />
        <Typography component="div" variant="body2" color="red">{errors.email?.message}</Typography>
        <Typography component="span" variant="body2" >Password:</Typography>
        <TextField
          {...register("password")}
            variant="outlined"
            InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
            fullWidth
            margin="normal"
            type="password" 
            sx={{
              "& label.Mui-focused": {
                display: "none",
              },
              "& legend": {
                display: "none",
              }
            }}
        />
        <Typography component="div" variant="body2" color="red">{errors.password?.message}</Typography>
         <Typography component="span" variant="body2" >Confirm Password:</Typography>
        <TextField
          {...register("confirm_password")}
            variant="outlined"
            InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
            fullWidth
            margin="normal"
            type="password" 
            sx={{
              "& label.Mui-focused": {
                display: "none",
              },
              "& legend": {
                display: "none",
              }
            }}
        />
        <Typography component="div" variant="body2" color="red">{errors.confirm_password?.message}</Typography>
          <Typography component="span" variant="body2" >Your name</Typography>
        <TextField
          {...register("name")}
            variant="outlined"
            InputLabelProps={{  style: { fontSize: 30 }, shrink: true }}
            fullWidth
          margin="normal"
          autoComplete='true'
            type="text" 
            sx={{
              "& label.Mui-focused": {
                display: "none",
              },
              "& legend": {
                display: "none",
              }
            }}
        />
        <Typography component="div" variant="body2" color="red">{errors.name?.message}</Typography>
        <Typography 
            component="span"
            marginTop={2}
            >Upload images:
        </Typography>
       <Typography component="div" sx={{margin:"20px"}}>
        <input 
          type="file"
          multiple
          {...register("avatar")}
        />
      </Typography>
         <Typography component="div" variant="body2" color="red">{errors.avatar?.message}</Typography>
        <Button
          // component={Link}to={{ pathname: `/users`}}
          type="submit"
          variant="outlined"
            sx={{
              width: "250px",
              marginLeft: "25px",
              height: "60px",
              textTransform: "none",
              borderRadius: "5px",
              color: "gray",
              fontSize:"25px",
              marginTop: "20px",
              borderColor: "gray",
              "&: hover": {
                backgroundColor: "#162639",
                color: "#ffFFFf",
                borderColor:"gray",

              },
            }}
          >Sign up
          </Button>
        <Box marginTop={3}>
            Already have an account?{" "}
            <Link to={`/login?redirect=${redirect}`}>Login</Link>
        </Box>
      </Box>
    </Container>
  )
}

export default SignUp