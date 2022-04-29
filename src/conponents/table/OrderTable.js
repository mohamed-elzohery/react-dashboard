import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from './OrderTable.module.css';


const createData = (name,  orderId, date, status) => {
    return { name,  orderId, date, status }
  }
  
const rows = [
    createData('Frozen yoghurt', 122343434, "2 March 2022", "Delivered"),
    createData('Ice cream sandwich', 63743343, "5 April 2022", "Under Revision"),
    createData('Eclair', 93434883, "17 Feb 2022", 'Canceled'),
    createData('Cupcake', 374347833, "22 April 2022", "Approved"),
  ];

const OrderTable = () => {
  return <div className={classes['table']}>
      <h3>Recent Orders</h3>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Order</TableCell>
            <TableCell align="left">Order Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.orderId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left" >
              <span className={`${classes['status']} ${row.status === 'Approved' ?
               classes['status--approved'] : row.status === 'Canceled' ? 
               classes['status--canceled'] : row.status === 'Delivered' ?
               classes['status--delivered'] : classes['status--ofo']} 
               `}>
                {row.status}
               </span>
               </TableCell>
            <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

export default OrderTable;




