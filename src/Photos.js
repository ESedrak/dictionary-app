import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Photos.css";

const Photos = (props) => {
  // console log props.photos for the data
  if (props.photos) {
    return (
      <section>
        <Row className="Photos">
          {props.photos.map((photo, index) => {
            return (
              <Col sm={4} key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="Photos-img"
                  />
                </a>
              </Col>
            );
          })}
        </Row>
      </section>
    );
  } else {
    return null;
  }
};

export default Photos;
