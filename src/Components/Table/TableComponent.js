import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import '../../App.css'

function createData(name, country, city, salary) {
    return { name, country, city, salary };
}

const rows = [
    createData("Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"),
    createData("Minerva Hooper", "Curacao", "Sinaai-Waas", "$23,789"),
    createData("Sage Rodriguez", "Netherlands", "Baileux", "$56,142"),
    createData("Philip Chaney", "Korea, South", "Overland Park", "$38,735"),
    createData("Mason Porter", "Chile", "Gloucester", "$78,615"),
    createData("Doris Greene", "Malawi", "Feldkirchen in Karnten", "$63,542"),

]


function TableComponent() {
    return (
        <>
            <TableContainer style = {{padding: "0px 50px 0px 0px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className = "primaryColorHead">
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Country</TableCell>
                            <TableCell align="left">City</TableCell>
                            <TableCell align="right">Salary</TableCell>
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
                                <TableCell align="left">{row.country}</TableCell>
                                <TableCell align="left">{row.city}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableComponent;
