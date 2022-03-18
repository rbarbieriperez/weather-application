import React from "react";
import './nextDays.css';
import '../styles.css';
import TableBody from "./tableBody";

function NextDays(){
  return(
    <section className="next-days-section">
        <h2>Next Days Metrics</h2>
        <TableBody />
      
    </section>
  );
}



export default NextDays;