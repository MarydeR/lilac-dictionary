import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div>
        <span>synonyms: {props.data}</span>
      </div>
    );
  } else return null;
}
