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

  function showError(response) {
    setResultinfo(null);
    return (
      <div>
        <h2>Not Found</h2>
      </div>
    );
  }
  function search(event) {
    event.preventDefault();
    let apiurl = `https://api.shecodes.io/dictionary/v1/define?word=${newword}&key=2ec340bdbdo84acaf6ct2a055b44668d`;
    axios.get(apiurl).then(handleresponse).catch(showError);
  }

  function handleNewWord(event) {
    setNeword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            autoComplete="off"
            onChange={handleNewWord}
          />
          <button class="btn btn-outline-secondary">Button</button>
        </div>
      </form>

      <div className="resultssection">
        <Result data={resultinfo} />
      </div>
    </div>
  );
}
