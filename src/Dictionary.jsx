import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("Apple");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary-form">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type in a word                                                    🔍"
            onChange={handleKeyword}
          />
        </form>
        <div className="Hint">
          Suggested words: plane, car, forest, sunset...
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
