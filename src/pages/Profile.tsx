import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, CardActionArea, CardContent, CardMedia} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { UserForm } from '../types/user';
import { SignUpSchema } from '../formvalidation/signUpSchema'
import { getUserBydId } from '../redux/methods/userMethod';
import axiosInstance from '../common/axiosInstance';
import Loading from '../components/loading/Loading';

const Profile = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const { id } = useParams();
  const [refresh, setRefresh] = useState<boolean>(false);
  const  users = useAppSelector((state) => state.userReducer.currentUser);
  const { handleSubmit, register, formState: { errors } } = useForm<UserForm>({
    resolver: yupResolver(SignUpSchema)
  })
   const onsubmit: SubmitHandler<UserForm> = data => {
    const update = {
      name: data.name,
      email: data.email,
      password: data.password === '' ? null : data.password,
      avatar : data.avatar
    };
    axiosInstance
      .put(`/users/${users?.id}`, update)
      .then((res) => {
        setRefresh((prev) => (prev = !prev));
      })
      .catch((err) => (console.log(err)));
   }
  
   useEffect(() => {
     dispatch(getUserBydId(id));
     navigate(`/profile/${id}`);
   }, [dispatch, id, refresh])
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      { !users ? (
        <Loading />
        ) : (
        <Grid sx={{display:"flex"}}  container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          User Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onsubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                   {...register("name", {
                          value: users?.name,
                        })}
                  required
                  fullWidth
                  id="Name"
                  label="Your Name"
                  autoFocus
              />
              <Typography component="div" variant="body2" color="red">{errors.name?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                {...register("email", {
                          value: users?.email,
                        })}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   {...register("password", {
                          value: users?.password,
                        })}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
              />
              <Typography component="div" variant="body2" color="red">{errors.password?.message}</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   {...register("confirm_password", {
                          value: users?.confirm_password,
                        })}
                  label=" confirm Password"
                  type="password"
                  id="confirm_password"
                  autoComplete=" new password"
              />
              <Typography component="div" variant="body2" color="red">{errors.confirm_password?.message}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  InputLabelProps={{  style: { fontSize: 30, borderColor:"none" }, shrink: true }}
                  fullWidth
                  margin="normal"
                  type="file"
                  inputProps={{multiple: true}}
                    {...register("avatar", {
                          value: users?.avatar,
                        })}
                  sx={{
                    "& label.Mui-focused": {
                      display: "none",
                    },
                    "& legend": {
                      display: "none",
                    }
                  }}
                />
              <Typography component="div" variant="body2" color="red">{errors.avatar?.message}</Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                height: "60px",
                textTransform: "none",
                borderRadius: "5px",
                color: "gray",
                fontSize: "25px",
                marginTop: "20px",
                borderColor: "gray",
                mt: 3, mb: 2 ,
                "&: hover": {
                  backgroundColor: "#162639",
                  color: "#ffFFFf",
                  borderColor: "gray",
                },
              }}
            >
             Update
            </Button>
          </Box>
            </Box>
            <Box sx={{ml:10, mt:20}}>
        <Card
          sx={{
          maxWidth: 600,
          display: 'flex',
          height: 'auto',
            }}
          > 
        <CardActionArea >
        <CardMedia
          component="img"
          sx={{
            width:"100%",
            height: 'auto',
            objectFit: 'cover',
          }}
          image={users.avatar}
        />
        <CardContent>
          <Typography variant="h3" component="div">{users.name}</Typography>
          <Typography  sx={{display:'flex', gap:'5px', fontSize:'50px'}} color="text.secondary">
            <Typography  color="lightcoral">Email: {users.email} </Typography>
          </Typography>
          <Typography color="blue" variant="body1" component="div">Role: {users.role}</Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    </Box>
    </Grid>

  )}
  </Container>
  )
}

export default Profile