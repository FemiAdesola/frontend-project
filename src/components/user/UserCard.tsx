import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import { UserType } from '../../types/user';
import { getUserBydId } from '../../redux/methods/userMethod';
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';

const UserCard = ({ email, name, role, avatar }: UserType) => {
  //  const navigate = useNavigate();
  // const { id } = useParams();
  //  useEffect(() => {
  //    dispatch(getUserBydId(id));
  //   //  navigate(`/users/${id}`);
  //  }, [dispatch, id])
  return (
     <Card sx={{
          maxWidth: 340,
          margin: '10px',
          display: 'flex',
          height: '400px',
      }}>
      <CardActionArea >
        <CardMedia
          component="img"
          sx={{
            width:"300px",
            height: '250px',
            maxWidth: '100%',
            objectFit: 'cover',
          }}
          image={avatar}
        />
        <CardContent>
          <Typography variant="h6" component="div">{name}</Typography>
          <Typography variant="subtitle1" sx={{display:'flex', gap:'5px'}} color="text.secondary">
            <Typography  color="lightcoral">Email: {email} </Typography>
          </Typography>
        <Typography color="blue" variant="body1" component="div">Role: {role}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserCard

function dispatch(arg0: AsyncThunkAction<any, string | undefined, { state?: unknown; dispatch?: Dispatch<AnyAction> | undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
  throw new Error('Function not implemented.');
}
