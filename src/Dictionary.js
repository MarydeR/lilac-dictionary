import React from "react";
import { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [newword, setNeword] = useState("");
  let [resultinfo, setResultinfo] = useState(null);

  function handleresponse(response) {
    setResultinfo(response.data);
  }
  function search(event) {
    event.preventDefault();
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

      <div className="resultssection">
        <Result data={resultinfo} />
      </div>
    </div>
  );
}
