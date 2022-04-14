import React from "react";

export default function Phonetics(props) {
  // console.log(props.phonetic) to show data audio/text;
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
