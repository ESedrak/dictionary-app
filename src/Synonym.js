import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  // console.log(props.synonyms) to show the synonyms data in an array;
  if (props.synonyms) {
    return (
      <ul className="Synonym">
        {props.synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
