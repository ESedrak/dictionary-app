import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  // console.log(props.results.phonetics);
  // console.log(props.results.meanings[0].definitions[0].definition);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics
            .filter((phonetic) => {
              return phonetic.audio;
            })
            .map((phonetic, index) => {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
