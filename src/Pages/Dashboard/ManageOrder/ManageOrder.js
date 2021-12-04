import React, { useEffect, useState } from 'react';
import { Button, Container, FormControl, FormHelperText, MenuItem, Paper, Select, TableBody, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import spinner from '../../../Image/Icon/spinner.gif';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ManageOrder = () => {

  const [status, setStatus] = React.useState('');
  const [orders, setOrders] = useState([]);

  const handleStatusValue = e => {
    setStatus(e.target.value);
  };

  const handaleStatusChange = id => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status })
    })

  }



  const handaleDelete = id => {
    const uri = `http://localhost:5000/book/${id}`;
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

  useEffect(() => {
    fetch(`http://localhost:5000/book`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])


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
                <TableRow sx={{ backgroundColor: "#F4F7FC" }}>
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