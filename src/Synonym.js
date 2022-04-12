import React from "react";

export default function Synonym(props) {
  // console.log(props.synonym);
  return (
    <div className="Synonym">
      Synonyms:
      {props.synonym.map(function (synonyms, index) {
        if (props.synonym)
          return (
            <ul key={index}>
              <li>{synonyms}</li>
            </ul>
          );
        else {
          return null;
        }
      })}
    </div>
  );
}
