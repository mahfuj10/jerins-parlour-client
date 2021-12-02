import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import UseFirebase from '../../../../Hooks/UseFirebase';

const Navigation = () => {

  const { user, logOut } = UseFirebase();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#FFF8F5" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {user?.displayName}
          </Typography>

          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/book">
            <Button color="inherit">Book</Button>
          </Link>
          <Link to="/">
            <Button color="inherit">HOME</Button>
          </Link>
          {
            user?.email &&
            <Button color="inherit" onClick={logOut}>Log Out</Button>
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;