import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ViewModal from '../../ViewModal/ViewModal';
import AOS from 'aos';

const Service = ({ service }) => {

    const { title, image, description, price, _id } = service;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    // data aos
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    return (

        <Grid item xs={12} sm={6} lg={4} data-aos="fade-up">

            <Paper onClick={handleOpen} elevation={4} sx={{ p: 4, textAlign: "center" }}>
                <img width="86" src={image} alt="" />
                <Typography variant="h6" sx={{ mt: 1 }}>{title}</Typography>
                <Typography variant="h6" sx={{ color: "#F7568B", mb: 1 }}>${price}</Typography>
                <Typography variant="body2">{description}.</Typography>
            </Paper>

            <ViewModal
                id={_id}
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />
        </Grid>
    );
};


export default Service;