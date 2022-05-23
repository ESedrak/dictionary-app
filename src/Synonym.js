import React from "react";
import "./Synonym.css";

const Synonym = (props) => {
  // console.log(props.synonyms) to show the synonyms data in an array;
  if (props.synonyms) {
    return (
      <ul className="Synonym">
        {props.synonyms.map((synonym, index) => {
          return (
            <li key={index} className="Synonym-list">
              <strong>{synonym}</strong>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default Synonym;
