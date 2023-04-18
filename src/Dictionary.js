import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [newword, setNeword] = useState("");

  function handleresponse(reponse) {
    let defintion = reponse.data.meanings;
    console.log(defintion);
  }
  function search(event) {
    event.preventDefault();

    alert(`Searching ${newword}`);

    let apiurl = `https://api.shecodes.io/dictionary/v1/define?word=${newword}&key=2ec340bdbdo84acaf6ct2a055b44668d`;
    axios.get(apiurl).then(handleresponse);
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
