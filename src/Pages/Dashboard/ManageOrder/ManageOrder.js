import { Button, Container, FormControl, FormHelperText, MenuItem, Paper, Select, TableBody, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {

  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handaleStatusChange = id => {
    fetch(`https://radiant-hamlet-99209.herokuapp.com/updateStatus/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status }),
    })

  }


  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://radiant-hamlet-99209.herokuapp.com/book`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  return (
    <Container>
      {orders.map(order => <Paper
        sx={{ p: 4, mb: 3 }}
        elevation={1}>
        <Typography variant="h6">{order?.title}</Typography>
        <select onChange={handleChange} className="form-select" aria-label="Default select example">
          <option selected >{order.status}</option>
          <option value="Done">Done</option>
          <option value="On going">On going</option>
        </select>

        <Button className="mt-2" onClick={() => handaleStatusChange(order._id)} variant="contained">Update</Button>
      </Paper>
      )}
    </Container>
  );
};

export default ManageOrder;