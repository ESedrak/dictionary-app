import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
  // console.log(props.meaning) to show data on partOfSpeech/definitions/examples and synonyms;
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            <em>
              <p className="example">{definition.example}</p>
            </em>
            <br />
          </div>
        );
      })}
      <Synonym synonyms={props.meaning.synonyms} />
    </div>
  );
}
