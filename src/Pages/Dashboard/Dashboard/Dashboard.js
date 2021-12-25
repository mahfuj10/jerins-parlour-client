import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BiCart } from 'react-icons/bi';
import { MdOutlineReviews } from 'react-icons/md';
import { IoAdd } from 'react-icons/io5';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdPersonAdd } from 'react-icons/io';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink,
    Link,
} from "react-router-dom";
import spinner from '../../../Image/Icon/spinner.gif';
import { Button, Divider } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin/MakeAdmin';
import AddReivew from '../AddReivew/AddReivew';
import MyOrder from '../MyOrder/MyOrder';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddService from '../AddService/AddService';
import AdminRoute from '../AdminRoute/AdminRoute';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../Image/Group 33092.png';
import { AiOutlineHome } from 'react-icons/ai';

const drawerWidth = 300;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { admin, isLoading } = useAuth();


    const drawer = (
        <section style={{ marginLeft: "15%", marginTop: '10px' }}>
            <Toolbar>
                <Link to="/">
                    <img style={{ marginBottom: '20px' }} width="150" src={logo} alt="webLogo" />
                </Link>
            </Toolbar>
            <Divider />

            <Link to="/" style={{ textDecoration: "none", color: "#878787", fontSize: '20px' }}>
                <Button color="inherit">
                    <Typography variant="h6"><AiOutlineHome /></Typography>
                    <Typography variant="body2" sx={{ mt: 1, ml: 1 }}> Home</Typography>
                </Button></Link> <br />

            <NavLink to={`${url}`} activeStyle={{ color: "#F63E7B" }} style={{ textDecoration: "none", color: "#878787", fontSize: '20px' }}>
                <Button color="inherit">
                    <Typography variant="h6"><BiCart /></Typography>
                    <Typography variant="body2" sx={{ mt: 1, ml: 1 }}> My Order</Typography>

                </Button>
            </NavLink> <br />


            <NavLink to={`${url}/review`}
                activeStyle={{ color: "#F63E7B" }}
                style={{ textDecoration: "none", color: "#878787", fontSize: '20px' }}>
                <Button color="inherit">
                    <Typography variant="h6"><MdOutlineReviews /></Typography>
                    <Typography variant="body2" sx={{ mt: 1, ml: 1 }}> Add Review</Typography>
                </Button>
            </NavLink>
            {admin &&
                <Box>
                    <NavLink
                        activeStyle={{ color: "#F63E7B" }}
                        style={{ textDecoration: "none", color: "#878787", fontSize: '20px' }}
                        to={`${url}/makeAdmin`}>
                        <Button color="inherit">
                            <Typography variant="h6"><IoMdPersonAdd /></Typography>
                            <Typography variant="body2" sx={{ mt: 1, ml: 1 }}> Make Admin</Typography>
                        </Button>
                    </NavLink> <br />

                    <NavLink to={`${url}/addService`}
                        activeStyle={{ color: "#F63E7B" }}
                        style={{ textDecoration: "none", color: "#878787", fontSize: '20px' }}>
                        <Button color="inherit">
                            <Typography variant="h6"><IoAdd /></Typography>
                            <Typography variant="body2" sx={{ mt: 1, ml: 1 }}> Add Serivce</Typography>
                        </Button></NavLink> <br />

                    <NavLink to={`${url}/manageorder`}
                        activeStyle={{ color: "#F63E7B" }}
                        style={{ textDecoration: "none", color: "#878787", fontSize: '20px' }}>
                        <Button color="inherit">

                            <Typography variant="h6"><CgMenuGridO /></Typography>
                            <Typography variant="body2" sx={{ mt: 1, ml: 1 }}> Manage All Order</Typography>
                        </Button>
                    </NavLink> <br />
                </Box>
            }

        </section>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar


                position="fixed"
                sx={{
                    background: "#F63E7B",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
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
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box

                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box

                style={{ backgroundColor: "#F4F7FC", height: "100vh" }}
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/bookinglist`}>

                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReivew />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorder`}>
                        <ManageOrder />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addService`}>
                        <AddService />
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
