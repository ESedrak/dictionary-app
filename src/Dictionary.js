import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for the word ${keyword}`);
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
