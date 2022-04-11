import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for the word ${keyword}`);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="search" onChange={keywordChange}></input>
    </form>
  );
}
