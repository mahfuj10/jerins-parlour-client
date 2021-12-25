import { Container, Typography, TextField, Button, Alert, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import { FcGoogle } from 'react-icons/fc';
import '../../Style/Style.css'
import useAuth from '../../../Hooks/UseAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { handaleGoogleSign, user, registerUser, error } = useAuth();

    const buttonStyle = {
        border: '1px solid #ABABAB',
        padding: '3px 10px',
        borderRadius: "25px",
        display: 'flex',
        marginTop: "15px",
        justifyContent: "space-around",
        width: "300px",
        marginBottom: "20px"
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history, location);
        e.preventDefault();
    }
    return (
        <Container className="register-container" sx={{ height: "100vh", display: "grid", alignItems: "center", justifyContent: "center" }}>
            {/* <Navigation /> */}
            <Paper className="register-box" elevation={2} sx={{ width: 570, p: 3, border: '1px solid #ABABAB' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, fontSize: 24, ml: 3 }}>Create an account</Typography>
                <form style={{ display: "grid", justifyContent: "center" }} onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: 462, m: 1 }}
                        id="standard-basic"
                        label="Your Name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: 462, m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: 462, m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: 462, m: 1 }}
                        id="standard-basic"
                        label="Confirm Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        variant="standard" />

                    <Button sx={{ width: '99%', mt: 2, backgroundColor: "#F63E7B" }} type="submit" variant="contained">Create an account</Button>
                    <Typography variant="body1" sx={{ fontWeight: 500, mt: 2, textAlign: "center" }}>
                        Already have an account ? <Link to='/login' style={{ color: '#F7548A' }}>Login</Link>
                    </Typography>
                </form>

                <Box sx={{ textAlign: "center", mt: 2, display: "grid", justifyContent: "center" }}>
                    <Typography variant="body" sx={{ fontWeight: 500 }}>  ---------------------- Or -----------------------</Typography>
                    <Box
                        style={buttonStyle}
                        onClick={handaleGoogleSign}>
                        <Typography variant="h5"><FcGoogle /></Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500, mt: 1 }}>Continue with Google</Typography>
                    </Box>
                </Box>
            </Paper>

            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
        </Container>
    );
};

export default Register;