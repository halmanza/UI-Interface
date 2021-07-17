import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const classes = cn(
    "ui",
    "sidebar",
    "overlay",
    "left",
    "inverted",
    "menu",
    "animating",
    { visible: props.toggleMenu }
  );

  return (
    <div className={classes}>
      <ul>
        <Link to="/" className="item link">
          Home
        </Link>
        <Link to="/about" className="item link">
          About
        </Link>
        <Link to="/Libraries" className="item link">
            Libraries
        </Link>
        <Link to="/contact" className="item link">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
