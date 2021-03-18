import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

/**
 * Component to show details of a dog based on url parameter
 * @param {Object} { dog, dogs }
 * @returns JSX code to render details of a dog
 */
const DogDetails = ({ dog, dogs }) => {
  let { name } = useParams();
  const history = useHistory();
  const [currDog, setCurrDog] = useState(null);

  // if dog passed, set currDog to dog, otherwise find in dogs
  useEffect(() => {
    if (dog) {
      setCurrDog(dog);
    }
    else {
      const foundDog =
        dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
      if (foundDog) {
        setCurrDog(foundDog);
      }
      else {
        setCurrDog(null);
        history.push("/dogs");
      }
    }
  }, [name, dogs]);

  return (
    <>
      {
        currDog ? 
        <div>
          <h1>{ name }</h1>
          <p>Age: { currDog.age }</p>
          <p>Facts:</p>
          <ul>
            { currDog.facts.map(fact => <li key={ uuid() }>{ fact }</li>)}
          </ul>
          <img src={ currDog.src } alt={ name } />
        </div> : null
      }
    </>
  );
};

export default DogDetails;