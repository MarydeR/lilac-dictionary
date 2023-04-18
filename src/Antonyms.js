import React from "react";

export default function Antonyms(props) {
  if (props.data) {
    return (
      <div>
        <span>antonyms: {props.data}</span>
      </div>
    );
  } else return null;
}
