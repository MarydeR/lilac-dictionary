import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <h2>{props.data.word}</h2>
        <h3>/{props.data.phonetic}/</h3>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="Result">
        <h2 className="nf text-center">...</h2>
      </div>
    );
  }
}
