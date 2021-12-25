import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../../../Image/Group 33092.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import UseFirebase from '../../../../Hooks/UseFirebase';
import { useHistory } from 'react-router-dom';
import { Container, useTheme } from '@mui/material';

const Navigation = () => {
  const theme = useTheme();
  const { user, logOut } = UseFirebase();
  const history = useHistory();
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    marginLeft: "13px",
    fontWeght: 400
  }
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up('md')]: {
        display: "none !important"
      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: "none !important"
      }
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        float: "right"
      }
    },
    userInfo: {
      [theme.breakpoints.down('sm')]: {
        display: "none !important"
      }
    }

  })
  const { navIcon, navItemContainer, navLogo, userInfo } = useStyle();

  const [state, setState] = React.useState(false);


  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"

    >
      <List sx={{ mt: '50%' }}>
        <Divider />
        <ListItem button >
          <ListItemText>
            <Link style={linkStyle} to="/">
              HOME
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button >
          <ListItemText>
            <Link style={linkStyle} to="/dashboard">
              My Order
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button >
          <ListItemText>
            <Link style={linkStyle} to="/dashboard">
              Dashborad
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />

        <ListItem>
          {user.email && <ListItemText>
            <img src={user?.photoURL} style={{ width: '40px', borderRadius: "50%", marginRight: '10px' }} alt="userImage" />
            {user?.displayName}
          </ListItemText>}
        </ListItem>
        {user.email && <Divider />}
        <ListItem button >
          <ListItemText>
            <Box >
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
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );



  return (
    <>
      <Box className="nav" sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ background: "#FFF8F5" }}>
          <Container>
            <Toolbar>
              <IconButton
                onClick={() => setState(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: "#F73E7B" }}
                className={navIcon}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img className={navLogo} src={logo} width="100" alt="navlogo" sx={{ ml: 37 }} />
              </Typography>
              <Typography className={userInfo} variant="body2" sx={{ flexGrow: 1, color: "black", fontWeight: 500, }}>
                {user?.displayName}
              </Typography>

              <Box className={navItemContainer} sx={{ mr: 5 }}>
                <Link style={linkStyle} to="/">
                  <Button color="inherit">HOME</Button>
                </Link>
                <Link style={linkStyle} to="/dashboard">
                  <Button color="inherit">My Order</Button>
                </Link>
                <Link style={linkStyle} to="/dashboard">
                  <Button color="inherit">Dashborad</Button>
                </Link>
              </Box>

              <Box className={navItemContainer}>
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
          </Container>
        </AppBar>
      </Box>

      <React.Fragment >
        <Drawer
          open={state}
          onClose={() => setState(false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Navigation;