import { Alert, Button, Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../../Image/Group 33092.png';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import Navigation from '../../Home/Header/Navigation/Navigation';

const Login = () => {

    const { handaleGoogleSign, loginUser, error } = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();




    // google sign
    const googleSign = () => {
        handaleGoogleSign(location, history);
    };

    // login form submit 
    const handaleLoginUser = e => {
        e.preventDefault();
        loginUser(email, password, location, history);
    };

    // email, pass input
    const inputStyle = {
        width: "100%",
        border: '1px solid #F7548A',
        padding: '6px 10px',
        marginBottom: "20px",
        borderRadius: "25px"

    };

    // google login button
    const providerButton = {
        border: '1px solid #F7548A',
        padding: '3px 10px',
        borderRadius: "25px",
        display: 'flex',
        justifyContent: "space-around",
        width: "100%",
        marginBottom: "20px",
        marginTop: '10px'
    };


    return (

        <>
            <Navigation />

            <Container sx={{ display: "grid", justifyContent: "center", alignItems: "center", height: "100vh" }}>

                <Box sx={{ position: "absolute" }}>
                    {error && <Alert severity="error">{error}</Alert>}
                </Box>

                <Paper className="login-box" elevation={2} sx={{ width: 400, display: "grid", justifyContent: "center", p: 3 }}>

                    <Box sx={{ display: "grid", justifyContent: "ceter", mb: 3 }}>
                        <img width="150" src={logo} alt="logo" />
                    </Box>

                    <form onSubmit={handaleLoginUser}>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            style={inputStyle}
                            type="email" required
                            placeholder='Your Email' />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            style={inputStyle}
                            type="password" required
                            placeholder='Your password' />
                        <Button
                            sx={{ paddingX: 4, mb: 2, backgroundColor: "#F63E7B" }}
                            type="submit" variant="contained">
                            login
                        </Button>
                    </form>

                    <Typography variant='body' sx={{ fontWeight: 600, textAlign: "center" }}>Or login with</Typography>

                    <Box
                        style={providerButton}
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