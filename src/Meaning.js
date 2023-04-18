import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span className="maindef fw-semibold">({props.data.partOfSpeech})</span>
      <span className="maindef"> {props.data.definition}</span> <br />
      <span className="fst-italic example">Example: {props.data.example}</span>
      <Synonyms data={props.data.synonyms} />
      <Antonyms data={props.data.antonyms} />
    </div>
  );
}
