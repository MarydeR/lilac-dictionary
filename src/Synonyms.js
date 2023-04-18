import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div className="Synonyms">
        <span className="info">synonyms: {props.data}</span>
      </div>
    );
  } else return null;
}
