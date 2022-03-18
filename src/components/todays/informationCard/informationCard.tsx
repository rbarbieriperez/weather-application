import { Tooltip } from "@material-ui/core";
import React, { ObjectHTMLAttributes } from "react";
import { isPropertySignature } from "typescript";
import './informationCard.css';

interface propsValidation {
  image: string,
  parameter: string,
  tooltipName: string
}



function InformationCard (props:propsValidation){
  return(
    <Tooltip title={props.tooltipName}>
      <article className="weather-property-article">
        <img src={props.image} alt="" />
        <p>{props.parameter}</p>
      </article>
    </Tooltip>
    
  );


}


export default InformationCard;