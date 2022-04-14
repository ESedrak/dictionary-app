import React from "react";

export default function Synonym(props) {
  console.log(props.synonym);
  if (props.synonym) {
    return (
      <ul className="Synonyms">
        {props.synonym.map((synonyms, index) => {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
