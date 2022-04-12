import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  // console.log(props.results);
  // console.log(props.results.meanings[0].definitions[0].definition);
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
