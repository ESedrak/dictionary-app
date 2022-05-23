import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

const Meaning = (props) => {
  // console.log(props.meaning) to show data on partOfSpeech/definitions/examples and synonyms;
  return (
    <div className="Meaning">
      <h3 className="Meaning-partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p className="Meaning-definition">{definition.definition}</p>
            <em>
              <p className="Meaning-example">{definition.example}</p>
            </em>
            <br />
          </div>
        );
      })}
      <Synonym synonyms={props.meaning.synonyms} />
    </div>
  );
};

export default Meaning;
