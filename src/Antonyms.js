import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.data) {
    return (
      <div className="Antonyms">
        <span className="info">antonyms: {props.data}</span>
      </div>
    );
  } else return null;
}
