import { Tooltip } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import React from "react";
import './nextDays.css';

interface propsCell {
  icon : string,
  parameter: string,
  tooltip: string
}




function TableParameter (props:propsCell){
  return(
    <Tooltip title={props.tooltip}>
      <div className="div-cell">
        <img src={props.icon} alt="" />
        <p>{props.parameter}</p>
      </div>
    </Tooltip>
      
        
  )
}

export default TableParameter;