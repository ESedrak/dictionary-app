import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  const handleKeywordSearch = (response) => {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    let apiKey = ` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiKey).then(handleKeywordSearch);
  };

  const keywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSearch}>
          <input type="search" onChange={keywordChange}></input>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
