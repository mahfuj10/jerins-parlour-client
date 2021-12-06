import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../../../Image/Group 33092.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import UseFirebase from '../../../../Hooks/UseFirebase';
import { useHistory } from 'react-router-dom';

const Navigation = () => {

  const { user, logOut } = UseFirebase();
  const history = useHistory();
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    marginLeft: "13px",
    fontWeght: 400
  }

  return (
    <Box className="nav" sx={{ flexGrow: 1 }}>
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
            <img src={logo} width="100" alt="" sx={{ ml: 37 }} />
          </Typography>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {user?.displayName}
          </Typography>

          <Box sx={{ mr: 5 }}>
            <Link style={linkStyle} to="/">
              <Button color="inherit">HOME</Button>
            </Link>
            <Link style={linkStyle} to="/dashboard/bookinglist">
              <Button color="inherit">My Order</Button>
            </Link>
            <Link style={linkStyle} to="/dashboard">
              <Button color="inherit">Dashborad</Button>
            </Link>
          </Box>

          <Box>
            {
              user?.email ?
                <Button
                  variant="contained"
                  sx={{ background: "#F73E7B" }}
                  onClick={logOut} >Log Out</Button>
                :

                <Button onClick={() => history.push('/login')} variant="contained"
                  sx={{ background: "#F73E7B" }}>Login</Button>

            }
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;