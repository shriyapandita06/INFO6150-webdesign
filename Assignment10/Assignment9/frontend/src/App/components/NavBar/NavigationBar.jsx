// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Menu } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../actions/auth';
// import { Navigate, useNavigate } from 'react-router-dom';

// export default (props) => {

//   let navigate = useNavigate();

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const dispatch = useDispatch();
//   const { isLoggedIn } = useSelector(state => state.auth);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     dispatch(logout())
//       .then( () => {
//         navigate("/");
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   if(!isLoggedIn) {
//     return <Navigate to="/"/>;
//   }

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar 
//         position="fixed" 
//         sx={{
//           width: `100%`,
//         }}
//       >
//         <Toolbar style={{ backgroundColor: '#57c7cb' }}>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleMenu}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 sx={{
//                   marginTop: '30px',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <a href='/home'><MenuItem>Home</MenuItem></a>
//                 <a href='/aboutus'><MenuItem>About Us</MenuItem></a>
//                 <a href='/jobPosts'><MenuItem>Job Posts</MenuItem></a>
//                 <a href='/contact'><MenuItem>Contact</MenuItem></a>
//                 <a href='/companyshowcase'><MenuItem>Company Showcase</MenuItem></a>
//               </Menu>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {props.name}
//           </Typography>
//           <Button 
//             color="inherit"
//             onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export default (props) => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{
          bgcolor: '#FFF8DC', // Pastel yellow background
          color: '#555555', // Dark gray text for contrast
          boxShadow: 'none', // Minimal shadow for a clean look
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleMenu}
            sx={{
              color: '#555555', // Matching icon color to text
              mr: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
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
            sx={{
              marginTop: '30px',
              '& .MuiPaper-root': {
                bgcolor: '#FFF8DC', // Pastel yellow dropdown
                color: '#555555', // Dropdown text color
              },
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <a href='/home' style={{ textDecoration: 'none', color: '#555555' }}>
              <MenuItem>Home</MenuItem>
            </a>
            <a href='/aboutus' style={{ textDecoration: 'none', color: '#555555' }}>
              <MenuItem>About Us</MenuItem>
            </a>
            <a href='/jobPosts' style={{ textDecoration: 'none', color: '#555555' }}>
              <MenuItem>Job Posts</MenuItem>
            </a>
            <a href='/contact' style={{ textDecoration: 'none', color: '#555555' }}>
              <MenuItem>Contact Us</MenuItem>
            </a>
            <a href='/companyshowcase' style={{ textDecoration: 'none', color: '#555555' }}>
              <MenuItem>Company Showcase</MenuItem>
            </a>
          </Menu>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              textAlign: 'center', // Center-align the title
            }}
          >
            {props.name}
          </Typography>
          <Button 
            onClick={handleLogout}
            sx={{
              color: '#555555', // Logout button color
              textTransform: 'none', // Remove all caps
              fontSize: '0.875rem',
              fontWeight: 'bold',
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
