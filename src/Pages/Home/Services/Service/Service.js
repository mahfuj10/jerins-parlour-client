import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';

const Service = ({ service }) => {

    const { title, image, description, price, _id } = service;
    const history = useHistory();
    const handaleHistory = () => {
        history.push(`/book/${_id}`);
    }

    return (

        <>
            <Grid item xs={12} sm={12} md={6} lg={4}>

                <Paper onClick={handaleHistory} elevation={3} sx={{ p: 4, textAlign: "center" }}>
                    <img width="86" src={image} alt="" />
                    <Typography variant="h6" sx={{ mt: 1 }}>{title}</Typography>
                    <Typography variant="h6" sx={{ color: "salmon", mb: 1 }}>${price}</Typography>
                    <Typography variant="body2">{description}.</Typography>
                </Paper>

            </Grid>

        </>
    );
};


export default Service;