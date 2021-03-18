import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

/**
 * Component that creates navigation bar
 * @param {Object} { updateCurrDog }
 * @returns JSX code to render nav bar
 */
const Nav = ({ updateCurrDog }) => {
  return (
    <div className="Nav">
      <Link to="/dogs/duke">
        <span onClick={ () => updateCurrDog("duke") }>Duke</span>
      </Link>
      <Link to="/dogs/perry">
        <span onClick={ () => updateCurrDog("perry") }>Perry</span>
      </Link>
      <Link to="/dogs/tubby">
        <span onClick={ () => updateCurrDog("tubby") }>Tubby</span>
      </Link>
      <Link to="/dogs/whiskey">
        <span onClick={ () => updateCurrDog("whiskey") }>Whiskey</span>
      </Link>
      <Link to="/dogs">Home</Link>
    </div>
  );
};

export default Nav;