import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span>{props.data.partOfSpeech}</span>
      <p>{props.data.definition}</p>
    </div>
  );
}
