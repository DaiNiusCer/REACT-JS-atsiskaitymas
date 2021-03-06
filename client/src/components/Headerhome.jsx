import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { useNavigate } from 'react-router-dom';

import "./Header.css" 

const Headerhome=(props)=> {
  const navigate=useNavigate()

  const logout=()=>{
    localStorage.removeItem('yoursToken');
    navigate('/');
  }
   const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"black" }}>
      <AppBar position="static" sx={{backgroundColor:"rgb(220, 248, 167)", boxShadow:" 6px 2px 15px -2px rgba(255,252,247,0.68)"}} >
        <Toolbar>
        <img className='logo' src="images/logo.png" alt="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
         
          <button  className='navBtn'><Link to="/home">Home<HomeIcon/></Link></button>
          <button className='navBtn'><Link to="/addpost">Add <AddCommentIcon/></Link></button>


         
         
         
            <div>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
              <Menu sx={{width:300, color:"black"}}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={()=>setAnchorEl(null)}
              >
                
                <MenuItem onClick={()=>logout()}><Link to="/">Logout</Link></MenuItem>
               
              
              </Menu>
            </div>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Headerhome