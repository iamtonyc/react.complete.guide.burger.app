import React from "react";
import Logo from "../../Logo/Logo";
import NavgiationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavgiationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
