import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import spinner from '../../../../Image/Icon/spinner.gif';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://radiant-hamlet-99209.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <Container >
            <Typography variant="h4" sx={{ fontSize: "34px", fontWeight: "700", mt: 10, mb: 8, textAlign: "center" }}>Our Awesome <span style={{ color: "#F7568B" }}>Services</span></Typography>
            {services.length === 0 ?
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={spinner} width="100" alt="spinner" />
                </Box>
                :
                <Box>
                    <Grid container spacing={2}>
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            />)
                        }
                    </Grid>

                    <Typography sx={{ display: "flex", justifyContent: "center", mt: 6, mb: 7 }}>
                        <Button variant="contained" sx={{ backgroundColor: "#F73E7B", py: 1, mb: 15 }}>Explore More</Button>
                    </Typography>
                </Box>
            }
        </Container>
    );
};

export default Services;