import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

/**
 * Component that creates navigation bar
 * @returns JSX code to render nav bar
 */
const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/dogs/duke">Duke</Link>
      <Link to="/dogs/perry">Perry</Link>
      <Link to="/dogs/tubby">Tubby</Link>
      <Link to="/dogs/whiskey">Whiskey</Link>
      <Link to="/dogs">Home</Link>
    </div>
  );
};

export default Nav;