import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span className="maindef fw-semibold">({props.data.partOfSpeech})</span>
      <span className="maindef"> {props.data.definition}</span> <br />
      <Example data={props.data.example} />
      <Synonyms data={props.data.synonyms} />
      <Synonyms data={props.data.antonyms} />
    </div>
  );
}
