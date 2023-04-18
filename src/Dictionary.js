import React from "react";
import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [newword, setNeword] = useState("");
  function search(event) {
    event.preventDefault();

    alert(`Searching ${newword}`);
  }

  function handleNewWord(event) {
    setNeword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleNewWord} />
        <button>Search</button>
      </form>
    </div>
  );
}
