import React from "react";

export default function Photos(props) {
  // console log props.photos for the data
  console.log(props.photo[0].src.small);
  if (props.photo) {
    return (
      <div className="Photos">
        <p>Test from photos</p>
        {props.photo.map((photos, index) => {
          <div key={index}>
            <img src={photos.src.small} />
          </div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
