import React from "react";
import { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [newword, setNeword] = useState("");
  let [resultinfo, setResultinfo] = useState(null);
  let [photo, setPhoto] = useState(null);

  function handleresponse(response) {
    setResultinfo(response.data);
  }
  function handlepexel(response) {
    setPhoto(response.data.photos);
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
    let pexelkey = `hxqZtG9RD4sTqtmomHMnlHQwdDqjBJZrxjwNZoTfNnVJ3jPm1o6gwAAY`;
    let pexelurl = `https://api.pexels.com/v1/search?query=${newword}&per_page=4`;
    let pexelheader = { Authorization: `${pexelkey} ` };

    axios.get(pexelurl, { headers: pexelheader }).then(handlepexel);
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
        <Photos data={photo} />
      </div>
    </div>
  );
}
