import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseFirebase from '../../../Hooks/UseFirebase';

const BookingDetails = () => {

    const { user } = UseFirebase();
    const { id } = useParams();
    const [service, setService] = useState({});


    useEffect(() => {
        fetch(`https://radiant-hamlet-99209.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const handaleBookService = () => {
        service.email = user?.email;
        service.name = user?.displayName;
        service.status = 'pending';
        fetch('https://radiant-hamlet-99209.herokuapp.com/book', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                alert('sucessfully added')
            })
    }

    return (
        <Box>
            <TextField id="outlined-basic" sx={{ width: '70%' }} variant="outlined" value={user?.displayName} />

            <TextField id="outlined-basic" sx={{ width: '70%', my: 3 }} variant="outlined" value={user?.email} />

            <TextField id="outlined-basic" sx={{ width: '70%' }} variant="outlined" value={service?.title} /> <br /><br />

            <Button onClick={handaleBookService} variant="contained">Book Now</Button>
        </Box>
    );
};

export default BookingDetails;