import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

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