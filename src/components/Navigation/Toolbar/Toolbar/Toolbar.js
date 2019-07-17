import React from "react";
import Logo from '../../../Layout/Logo/Logo'
import classes from "./Toolbar.css";
import NavigationItems from '../../NavigationItems/NavigationItems'

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo/>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
};

export default toolbar;
