import TableContainer from "@material-ui/core/TableContainer";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import thermometer from '../images/thermometer.png';
import waterDrop from '../images/water-drop.png';
import cloud from '../images/cloud-computing.png';
import humidity from '../images/humidity.png'

import React from "react";
import './nextDays.css';
import TableParameter from "./tableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function TableBody (){
  return(
    <TableContainer className="main-table">
      <Table sx={{ minWidth: 150 }} aria-label="customized table">
        <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Sunday March 6</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Temperature</StyledTableCell>
              <StyledTableCell><TableParameter icon={thermometer} parameter="30°C" tooltip="Temperature"/></StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Cloudiness</StyledTableCell>
              <StyledTableCell><TableParameter icon={cloud} parameter="100%" tooltip="Cloudiness"/></StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Probability of Rain</StyledTableCell>
              <StyledTableCell><TableParameter icon={waterDrop} parameter="100%" tooltip="Probability of Rain"/></StyledTableCell>
            </TableRow>  
            <TableRow>
              <StyledTableCell>Humidity</StyledTableCell>
              <StyledTableCell><TableParameter icon={humidity} parameter="100%" tooltip="Humidity"/></StyledTableCell>
            </TableRow>  
              
            
          </TableHead>
      </Table>
    </TableContainer>

  );
}


export default TableBody;