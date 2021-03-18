import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColorForm.css";

/**
 * Component that displays a form for users to add a new color
 * @param {Object} { addColor }
 * @returns JSX code to render form
 */
const NewColorForm = ({ addColor }) => {
  const history = useHistory();

  const initFormData = { name: "", color: "black" };
  const [formData, setFormData] = useState(initFormData);
  
  /**
   * Updates formData when user changes the value of a field in the form
   * @param {Object} evt 
   */
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  /**
   * Adds a new color with addColor using the user's input in the form, and
   * redirects to home page without refreshing
   * @param {Object} evt 
   */
  const handleSubmit = evt => {
    evt.preventDefault();
    addColor(formData);
    history.push("/colors");
  };

  return (
    <form className="NewColorForm" onSubmit={ handleSubmit }>
      <div className="NewColorForm-field">
        <label htmlFor="name">Color name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={ handleChange }
          value={ formData.name }
        />
      </div>
      <div className="NewColorForm-field">
        <label htmlFor="color">Color value:</label>
        <input
          id="color"
          name="color"
          type="color"
          onChange={ handleChange }
          value={ formData.color }
        />
      </div>
      <button className="NewColorForm-button" type="submit">Add this color</button>
    </form>
  );
};

export default NewColorForm;