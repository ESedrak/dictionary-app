import React from "react";
import { Row, Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  // console.log(props.phonetic.audio) to show data audio/text;
  return (
    <Row className="Phonetics">
      <Col>
        <ReactAudioPlayer src={props.phonetic.audio} volume controls />
      </Col>
      <Col>{props.phonetic.text}</Col>
    </Row>
  );
}
