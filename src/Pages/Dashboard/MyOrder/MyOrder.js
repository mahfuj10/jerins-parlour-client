import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import UseFirebase from '../../../Hooks/UseFirebase';
import Order from './Order';
import spinner from '../../../Image/Icon/spinner.gif';

const MyOrder = () => {

    const { user } = UseFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/book/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    return (
        <>
            {
                orders.length === 0 ?

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img width="100" src={spinner} alt="spinner" />
                    </Box>

                    :
                    <Grid container spacing={0}>


                        {
                            orders.map(order => <Order
                                key={order._id}
                                order={order}
                            />)
                        }

                    </Grid>}
        </>
    );
};

export default MyOrder;