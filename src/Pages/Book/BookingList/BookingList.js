import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import UseFirebase from '../../../Hooks/UseFirebase';

const BookingList = () => {

    const [books, setBooks] = useState([]);
    const { user } = UseFirebase();

    useEffect(() => {
        fetch(`https://radiant-hamlet-99209.herokuapp.com/book/${user?.email}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <Box sx={{ textAlign: "center", width: "400px" }}>
            {
                books.map(book => <Paper
                    sx={{ p: 3 }}
                    elevation={1}
                >
                    <img alt="" width="80" src={book?.image} />
                    <Typography variant="h6">
                        {book?.title}
                    </Typography>
                    <Typography variant="body2">
                        {book?.description}
                    </Typography>
                </Paper>)
            }
        </Box>
    );
};

export default BookingList;