import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tabs = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableCell>Arathi</TableCell> 
                <TableCell>22</TableCell>
                <TableCell>Kollam</TableCell>
                </TableBody>
            </Table>
        </TableContainer>
      
    </div>
  )
}

export default Tabs
