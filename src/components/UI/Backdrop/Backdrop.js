import React from "react";
import classes from "./Backdrop";

const backdrop = (props) =>{
  //
  
  if (props.show) {
    return <div className={classes.Backdrop} onClick={props.clicked} />;
  } else {
    return null;
  }
//    props.show ?     <div className={classes.Backdrop} onClick={props.clicked} > </div>  : null
  }
export default backdrop;
