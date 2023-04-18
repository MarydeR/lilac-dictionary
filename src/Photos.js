import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.data) {
    return (
      <div className="Photo">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col-md-6 grid" key={index}>
                <a href={photo.src.landscape} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="bin-images"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
