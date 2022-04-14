import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  // console.log(props.results) to see the data received (from Dictionary) - shows phonetics/meanings;
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {/* Had to filter phonetics as there was empty strings showing up which uploaded the original site again */}
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
