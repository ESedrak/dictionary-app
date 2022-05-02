import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  // console.log(props.synonyms) to show the synonyms data in an array;
  if (props.synonyms) {
    return (
      <div className="Synonym">
        {props.synonyms.map((synonym, index) => {
          return (
            <span key={index}>
              <strong>{synonym}</strong>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
