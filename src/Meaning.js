import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span>({props.data.partOfSpeech})</span>
      <span>{props.data.definition}</span>
      <span> {props.data.example}</span>
      <Synonyms data={props.data.synonyms} />
      <Antonyms data={props.data.antonyms} />
    </div>
  );
}
