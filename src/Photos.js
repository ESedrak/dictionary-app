import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Photos(props) {
  // console log props.photos for the data
  console.log(props.photos);
  if (props.photos) {
    return (
      <Row className="Photos">
        {props.photos.map(function (photo, index) {
          <Col key={index}>
            <img src={photo.src.small} alt="photos" />
          </Col>;
        })}
      </Row>
    );
  } else {
    return null;
  }
}
