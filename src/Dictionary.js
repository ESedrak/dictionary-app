import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  const handleKeywordSearch = (response) => {
    setResults(response.data[0]);
    // Receiving the data from the dictionary API
  };

  const handleSearch = (e) => {
    e.preventDefault();

    let apiKey = ` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiKey).then(handleKeywordSearch);
  };

  const keywordChange = (e) => {
    setKeyword(e.target.value);
    // The input given to the searchBar is stored here
  };

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSearch}>
          <span className="searchBar">
            <input
              type="search"
              onChange={keywordChange}
              placeholder="Search for a word  "
            ></input>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleSearch}
            >
              🔍
            </button>
          </span>
        </form>
      </section>
      <Results results={results} />
      {/* Sending the results from (response.data[0]) to it's own component  - can console.log to look at the data*/}
    </div>
  );
}
