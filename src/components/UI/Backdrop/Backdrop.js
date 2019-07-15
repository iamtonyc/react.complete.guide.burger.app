import React from "react";
import classes from "./Backdrop";

const backdrop = props =>
  // let abc = props.show;
  // if (abc === true) {
  //   return <div className={classes.Backdrop} onClick={props.clicked} />;
  // } else {
  //   return null;
  // }

  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default backdrop;
