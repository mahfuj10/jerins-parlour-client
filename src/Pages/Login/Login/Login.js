import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import UseFirebase from '../../../Hooks/UseFirebase';
import Navigation from '../../Home/Header/Navigation/Navigation';

const Login = () => {

    const { handaleGoogleSign } = UseFirebase();
    const history = useHistory();
    const handaleHistory = () => {
        history.push('/register')
    }

    return (

        <>
        <Navigation />

        <Box sx={{display:'flex',justifyContent:"center",m:5}}>
            <Button variant="text" onClick={handaleGoogleSign}>
                Google Sign
            </Button>
            <Button variant="text" onClick={handaleHistory}>
                Don't have an account ?
            </Button>

        </Box>
        </>
    );
};

export default Login;