import React from "react";

import "./Example.css";

export default function Example(props) {
  if (props.data) {
    return (
      <div className="Example">
        <span className="info fst-italic example">Example: {props.data}</span>
      </div>
    );
  } else return null;
}
