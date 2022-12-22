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


interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
const Header = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
      const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
      };
    
    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            MUI
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
                <ListItemButton component={Link} to="login"  sx={{ textAlign: 'center' }}>
                    Login
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="cart" sx={{ textAlign: 'center' }}>
                    Cart
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
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          paddingLeft: "57px",
          paddingTop: "7px",
        }}
        >
        <AppBar component="nav" sx={{ background:"gray"}}>
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
                    variant="h6"
                    component={Link} to=""
                        sx={{
                            textDecoration: 'none', flexGrow: 1,
                            display: {
                                xs: 'none', sm: 'block'
                            },
                            color: (theme) => theme.palette.common.white,
                        }}
                        
                >
                Home
                </Typography>
                <Box sx={{display:"flex", m:2, paddingRight:20}}> 
                    <Box
                        component={Link}
                            to="products"
                            marginRight={5}
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            "&:hover": {
                                color: (theme) => theme.palette.common.black,
                            }
                            
                        }}>
                    Products
                    </Box>
                    <Box
                        component={Link}
                            to="login"
                            marginRight={5}
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            
                        }}>
                        Login
                    </Box>
                    <Box
                        component={Link}
                        to="cart"
                        sx={{
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            color: (theme) => theme.palette.common.white,
                            fontWeight: 'bold',
                            
                        }}>
                        Cart 
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