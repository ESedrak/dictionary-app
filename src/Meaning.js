import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
  // console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
            </p>
            <em>
              <p>
                <strong>Example:</strong>
                {definition.example}
              </p>
            </em>
            <br />
            <Synonym synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
