import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GroupIcon from '@mui/icons-material/Group';

import { useAppSelector, useAppDispatch } from '../hooks/reduxHook';
import { toggleTheme } from '../redux/reducers/darkLightReducer';



// import Search from './features/Search';
import { width } from '@mui/system';

interface Props {
  window?: () => Window;
}
const drawerWidth = 240;

const Header = (props: Props) => {
    const theme = useAppSelector(state=>state.darkLightReducer)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const colorToggle = (theme: { darkTheme: boolean; }) => {
        return theme.darkTheme ? "#303b47" : "gray";
    };
    const ToggleSwitch = () => {
        const dispatch = useAppDispatch();
        return (
            <Box>
                {theme.darkTheme}
                <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleTheme())} color="inherit">
                    {theme.darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
        </Box>
        );
    };
    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
           Logo
        </Typography>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="" sx={{ textAlign: 'center' }}>
                   Home
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="products" sx={{ textAlign: 'center' }}>
                    Products
                </ListItemButton>
                </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="signup"  sx={{ textAlign: 'center' }}>
                    Signup
                </ListItemButton>
                </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="create" sx={{ textAlign: 'center' }}>
                  CreateProduct
                </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton component={Link} to="users" sx={{ textAlign: 'center' }}>
                  Users
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="cart" sx={{ textAlign: 'center' }}>
                    Cart
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="search" sx={{ textAlign: 'center' }}>
                   {/* <Search/> */}
                </ListItemButton>
            </ListItem>
                
        </List>
    </Box>
  );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
    <Box
        sx={{
          height: "92px",
          justifyContent: "left",
          alignItems: "left",
          paddingLeft: "57px",
          paddingTop: "7px",
        }}
        >
        <AppBar component="nav" sx={{backgroundColor: colorToggle(theme)}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
                </IconButton>
                <Typography
                    variant="h4"
                        component={Link} to=""
                        sx={{
                            textDecoration: 'none', flexGrow: 1,
                            display: {
                                xs: 'none', sm: 'block'
                            },
                            color: (theme) => theme.palette.common.white,
                        }}
                        
                >
                        <HomeOutlinedIcon sx={{fontSize:"50px"}} />
                </Typography>
                <Box sx={{ display: "flex", m: 3, paddingRight: 20 }}>
                    <Box
                        paddingRight={5}
                            sx={{
                            m:-1,
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            "&:hover": {
                                color: (theme) => theme.palette.common.black,
                            }
                        }}><ToggleSwitch /></Box> 
                    <Box
                        component={Link}
                            to="products"
                            marginRight={3}
                            sx={{
                             mt:-1,
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'flex' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            "&:hover": {
                                color: (theme) => theme.palette.common.white,
                            }
                            
                            }}>
                            <Typography sx={{mt:1}}>Products</Typography>
                 <ShoppingBasketIcon sx={{fontSize:"30px"}}/>
                    </Box>
                    <Box
                        component={Link}
                            to="create"
                            marginRight={5}
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            
                        }}>
                        CreateProduct
                    </Box>
                    <Box
                        component={Link}
                            to="users"
                            marginRight={3}
                            sx={{
                            mt:-2,
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'flex' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            
                        }}>
                        <Typography sx={{mt:2}}>Users</Typography> 
                        <GroupIcon sx={{fontSize:"40px"}}/>
                    </Box>
                    <Box
                        component={Link}
                            to="signup"
                            marginRight={5}
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            
                        }}>
                        Signup
                    </Box>
                    <Box
                        component={Link}
                            to="cart"
                            marginRight={5}
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            
                        }}>
                        Cart 
                    </Box>
                    <Box
                        marginTop={-1}
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            justifyContent:"center"
                        }}>
                       {/* <Search/>  */}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, 
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
            {drawer}
            </Drawer>
        </Box>
        
    </Box>
  )
}

export default Header