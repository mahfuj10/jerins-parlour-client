import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/UseAuth';
import spinner from '../Image/Icon/spinner.gif';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    // if (isLoading) {
    //     return (
    //         <Box sx={{ display: "flex", justifyContent: "center" }}>
    //             <img src={spinner} width="100" alt="spinner" />
    //         </Box>
    //     )
    // }
    if (isLoading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;