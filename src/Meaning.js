import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
  // console.log(props.meaning) to show data on partOfSpeech/definitions/examples and synonyms;
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <em>
              <p>{definition.example}</p>
            </em>
          </div>
        );
      })}
      <Synonym synonyms={props.meaning.synonyms} />
    </div>
  );
}
