import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

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
  }, [name]);

  return (
    <>
      {
        dog ? 
        <div>
          <h1>{ name }</h1>
          <p>Age: { dog.age }</p>
          <p>Facts:</p>
          <ul>
            { dog.facts.map(fact => <li>{ fact }</li>)}
          </ul>
          <img src={ dog.src } alt={ name } />
        </div> : null
      }
    </>
  );
};

export default DogDetails;