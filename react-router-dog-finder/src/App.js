import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";
import whiskey from "./images/whiskey.jpg";
import './App.css';

/**
 * Component that creates for routing for app and displays navigation bar
 * @param {Object} { dogs }
 * @returns JSX code to render routing and navigation bar
 */
function App({ dogs }) {
  const [currDog, setCurrDog] = useState(null);

  /**
   * Sets currDog based on which link the user clicked
   * @param {string} name
   */
  const updateCurrDog = name => {
    console.log(`name: ${name}`);
    const dog = dogs.find(dog => dog.name.toLowerCase() === name);
    setCurrDog(dog);
  };

  return (
    <div className="App">
      <Nav updateCurrDog={ updateCurrDog } />
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={ dogs } />
        </Route>
        <Route path="/dogs/:name">
          {
            currDog ? <DogDetails dog={ currDog } /> :
              <DogDetails dogs={ dogs } />
          }
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
