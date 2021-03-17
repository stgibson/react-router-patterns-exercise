import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

/**
 * Component to show details of a dog based on url parameter
 * @param {Object} { dogs }
 * @returns JSX code to render details of a dog
 */
const DogDetails = ({ dogs }) => {
  let { name } = useParams();
  const [dog, setDog] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const currDog =
      dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    if (currDog) {
      setDog(currDog);
    }
    else {
      setDog(null);
      history.push("/dogs")
    }
  }, [name, dogs]);

  return (
    <>
      {
        dog ? 
        <div>
          <h1>{ name }</h1>
          <p>Age: { dog.age }</p>
          <p>Facts:</p>
          <ul>
            { dog.facts.map(fact => <li key={ uuid() }>{ fact }</li>)}
          </ul>
          <img src={ dog.src } alt={ name } />
        </div> : null
      }
    </>
  );
};

export default DogDetails;