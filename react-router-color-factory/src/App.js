import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ColorsList from "./ColorsList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";
import './App.css';

/**
 * Main component for app, which sets up routing and navigation bar
 * @return JSX code to render routing and navigation bar
 */
function App() {
  const [colors, setColors] = useState([]);

  /**
   * Adds color to colors
   * @param {string} data 
   */
  const addColor = data => {
    setColors(() => (
      [{ id: uuid(), name: data.name, color: data.color }, ...colors]
    ));
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors"><ColorsList colors={ colors } /></Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={ addColor } />
        </Route>
        <Route path="/colors/:color"><Color colors={ colors } /></Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
