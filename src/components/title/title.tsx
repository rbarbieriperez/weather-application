import React from "react";
import './title.css';
import '../styles.css';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@material-ui/core/Button';



function Title(){
  return(
    <header>
      <h1>Weather Monitoring Application</h1>
      <ExpandCircleDownIcon className="circular-button" fontSize="large"/>
    </header>
  
  );
}


export default Title;