import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://radiant-hamlet-99209.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <Container>
            <Typography variant="h4" sx={{ fontSize: "34px", fontWeight: "700", mt: 10, mb: 8, textAlign: "center" }}>Our Awesome <span style={{ color: "#F7568B" }}>Services</span></Typography>
            <Grid container spacing={2}>
                {
                    services.map(service => <Service service={service} />)
                }
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 6, mb: 7 }}>
                <Button variant="contained" sx={{ backgroundColor: "#F73E7B", py: 1, mb: 15 }}>Explore More</Button>
            </Box>
        </Container>
    );
};

export default Services;