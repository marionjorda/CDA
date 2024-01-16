import React from 'react';
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1,
            product: "Banane Anna",
            img:"https://img.freepik.com/photos-gratuite/fond-ecran-abstrait-nebuleuse-ultra-detaille-4_1562-749.jpg",
            customer:"Nathalie Faure",
            date: "2 Mars",
            amount: 69,
            method: "Facturation en ligne",
            status: "Approved",
        },
        {
            id: 2,
            product: "Banane Anna",
            img:"https://img.freepik.com/photos-gratuite/fond-ecran-abstrait-nebuleuse-ultra-detaille-4_1562-749.jpg",
            customer:"Nathalie Faure",
            date: "2 Janvier",
            amount: 69,
            method: "Facturation en ligne",
            status: "Approved",
        },
        {
            id: 3,
            product: "Banane Anna",
            img:"https://img.freepik.com/photos-gratuite/fond-ecran-abstrait-nebuleuse-ultra-detaille-4_1562-749.jpg",
            customer:"Nathalie Faure",
            date: "15 Mai",
            amount: 69,
            method: "Facturation en ligne",
            status: "Approved",
        },
        {
            id: 4,
            product: "Banane Anna",
            img:"https://img.freepik.com/photos-gratuite/fond-ecran-abstrait-nebuleuse-ultra-detaille-4_1562-749.jpg",
            customer:"Nathalie Faure",
            date: "28 Février",
            amount: 69,
            method: "Facturation en ligne",
            status: "Approved",
        },
        {
            id: 5,
            product: "Banane Anna",
            img:"https://img.freepik.com/photos-gratuite/fond-ecran-abstrait-nebuleuse-ultra-detaille-4_1562-749.jpg",
            customer:"Nathalie Faure",
            date: "8 Juin",
            amount: 69,
            method: "Facturation en ligne",
            status: "Disapproved",
        },
        {
            id: 6,
            product: "Banane Anna",
            img:"https://img.freepik.com/photos-gratuite/fond-ecran-abstrait-nebuleuse-ultra-detaille-4_1562-749.jpg",
            customer:"Nathalie Faure",
            date: "29 Avril",
            amount: 69,
            method: "Facturation en ligne",
            status: "Pending",
        },
      ];

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
