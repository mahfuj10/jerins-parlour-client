import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Order = ({ order }) => {

    const { image, title, description, status } = order;

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={0} sx={{ width: "415px", p: 3, mb: 4 }}>
                <img
                    height="72" width="72"
                    src={image} alt="serviceImage"
                />

                <Button
                    sx={{ paddingX: 3, ml: 20 }}
                    variant="text">
                    {status}
                </Button>

                <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: 600, mt: 2, mb: 1 }}>{title}</Typography>
                <Typography variant="body" sx={{ fontSize: "16px", fontWeight: 400 }}>{description}</Typography>

            </Paper>

        </Grid>
    );
};

export default Order;