import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Photos(props) {
  // console log props.photos for the data
  if (props.photos) {
    return (
      <Row className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <Col sm={4} key={index}>
              <img src={photo.src.landscape} alt="" />
            </Col>
          );
        })}
      </Row>
    );
  } else {
    return null;
  }
}
