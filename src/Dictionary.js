import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  const handleKeywordSearch = (response) => {
    alert(response.data[0].word);
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
    <form onSubmit={handleSearch}>
      <input type="search" onChange={keywordChange}></input>
    </form>
  );
}
