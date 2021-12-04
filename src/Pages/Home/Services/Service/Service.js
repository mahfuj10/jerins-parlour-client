import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import UseFirebase from '../../../../Hooks/UseFirebase';
import ViewModal from '../../ViewModal/ViewModal';

const Service = ({ service }) => {

    const { title, image, description, price, _id } = service;
    const { user } = UseFirebase();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handaleHistory = () => {
        history.push(`/book/${_id}`);
    }



    return (

        <>
            <Grid item xs={12} sm={12} md={6} lg={4}>

                <Paper onClick={handleOpen} elevation={3} sx={{ p: 4, textAlign: "center" }}>
                    <img width="86" src={image} alt="" />
                    <Typography variant="h6" sx={{ mt: 1 }}>{title}</Typography>
                    <Typography onClick={handaleHistory} variant="h6" sx={{ color: "salmon", mb: 1 }}>${price}</Typography>
                    <Typography variant="body2">{description}.</Typography>
                </Paper>

                <ViewModal
                    id={_id}
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                />
            </Grid>

        </>
    );
};


export default Service;