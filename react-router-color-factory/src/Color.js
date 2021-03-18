import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./Color.css";

/**
 * Component for a color, which shows screen with background matching the color
 * @return JSX code to render the color
 */
const Color = ({ colors }) => {
  const { color: colorName } = useParams();
  const history = useHistory();

  const [color, setColor] = useState(null);

  // finds color by colorName and sets color
  useEffect(() => {
    const currColor = colors.find(color => color.name === colorName);
    if (!currColor) {
      history.push("/colors");
      setColor(null);
    }
    else {
      setColor(currColor);
    }
  }, [colorName, colors]);

  return (
    <>
      {
        color &&
          <div className="Color" style={ { backgroundColor: color.color } }>
            <h1>THIS IS { color.name.toUpperCase() }. ISN'T IT BEAUTIFUL?</h1>
            <Link to="/colors">Go Back</Link>
          </div>
      }
    </>
  )
};

export default Color;