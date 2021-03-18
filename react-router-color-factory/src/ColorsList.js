import React from "react";
import { Link } from "react-router-dom";
import "./ColorsList.css";

/**
 * Displays list of colors and links to the colors and to a form to add a new
 * color
 * @param {Object} { colors }
 * @returns JSX code to render list of colors
 */
const ColorsList = ({ colors }) => {
  return (
    <>
      <h1>Welcome to the color factory.</h1>
      <Link to="/colors/new">Add a color</Link>
      <p>Please select a color.</p>
      <div className="ColorsList">
        {
          colors.map(color => (
            <Link key={ color.id } to={ `/colors/${color.name}` }>
              { color.name }
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default ColorsList;