import React from "react";

export default function Photos(props) {
  // console log props.photos for the data
  console.log(props.photo.src.small);
  if (props.photo) {
    return (
      <div className="Photos">
        {props.photo.src.small.map(function (photo, index) {
          <div key={index}>
            <img src={props.photo} />
          </div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
