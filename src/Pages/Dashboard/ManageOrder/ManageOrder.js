import React, { useEffect, useState } from 'react';
import { Paper, TableBody } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import spinner from '../../../Image/Icon/spinner.gif';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';



const ManageOrder = () => {

  const [status, setStatus] = React.useState('');
  const [orders, setOrders] = useState([]);

  const handleStatusValue = e => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    fetch(`https://radiant-hamlet-99209.herokuapp.com/book`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [orders])

  const handaleStatusChange = id => {
    fetch(`https://radiant-hamlet-99209.herokuapp.com/updateStatus/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status })
    })

  }



  const handaleDelete = id => {
    const uri = `https://radiant-hamlet-99209.herokuapp.com/book/${id}`;
    const exist = window.confirm("Are You sure want to delete ??");
    if (exist) {
      fetch(uri, {
        method: "DELETE",
      })
        .then()
        .then(data => {
          if (data.deleteCount > 0) {
            const remainingCar = orders.filter(order => order._id !== id);
            setOrders(remainingCar);
          }
        })
    }

  }




  return (
    <>

      {
        orders.length === 0 ?
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="100" src={spinner} alt="loaderimage" />
          </Box>
          :
          <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "" }}>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="right">Pay With</TableCell>
                  <TableCell align="right">Email ID</TableCell>
                  <TableCell align="right">Service</TableCell>
                  <TableCell align="right">Action</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row?._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row?.name}
                    </TableCell>

                    <TableCell align="right">Creadit Card</TableCell>
                    <TableCell align="right">{row?.email}</TableCell>
                    <TableCell align="right">{row?.title}</TableCell>
                    <TableCell align="right" ><DeleteIcon onClick={() => handaleDelete(row._id)} /></TableCell>
                    <TableCell align="right">
                      <select
                        onChange={handleStatusValue}
                        onClick={() => handaleStatusChange(row._id)}
                        style={{ padding: "5px 10px", border: "none" }}>

                        <option value="Pending">{row.status}</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Shipped">Shipped</option>
                      </select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      }
    </>
  );
};

export default ManageOrder;