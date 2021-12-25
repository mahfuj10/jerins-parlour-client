import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../../Image/Group 33092.png';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';

const Login = () => {

    const { handaleGoogleSign, user } = useAuth();



    const history = useHistory();
    const location = useLocation();
    const googleSign = () => {
        handaleGoogleSign(location, history);
    }

    const buttonStyle = {
        border: '1px solid #F7548A',
        padding: '3px 10px',
        borderRadius: "25px",
        display: 'flex',
        justifyContent: "space-around",
        width: "300px",
        marginBottom: "20px"
    }

    return (

        <>
            {/* <Navigation /> */}
            <Container sx={{ display: "grid", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Paper className="login-box" elevation={2} sx={{ width: 400, display: "grid", justifyContent: "center", p: 3 }}>

                    <Box sx={{ display: "grid", justifyContent: "center", mb: 3 }}>
                        <img width="150" src={logo} alt="logo" />
                    </Box>

                    <Typography variant='h5' sx={{ fontWeight: 600, textAlign: "center", mb: 3 }}>Login With</Typography>

                    <Box
                        style={buttonStyle}
                        onClick={googleSign}>
                        <Typography variant="h5"><FcGoogle /></Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500, mt: 1 }}>Continue with Google</Typography>
                    </Box>

                    <Typography variant="body2" sx={{ fontWeight: 500, textAlign: "center" }}>
                        Don't have an account ? <Link to='/register' style={{ color: '#F7548A' }}>Create an account</Link>
                    </Typography>

                </Paper>
            </Container>

        </>
    );
};

export default Login;