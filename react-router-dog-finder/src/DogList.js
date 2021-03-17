import React from "react";
import { v4 as uuid } from "uuid";

const DogList = ({ dogs }) => {
  return (
    <>
      <h1>Dog Finder</h1>
      {
        dogs.map(dog => (
          <div key={ uuid() }>
            <h2>{ dog.name }</h2>
            <img src={ dog.src } alt={ dog.name } />
          </div>
        ))
      }
    </>
  );
};

export default DogList;