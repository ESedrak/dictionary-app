import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

const Dictionary = () => {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [photo, setPhoto] = useState(null);

  const handleKeywordSearch = (response) => {
    // Receiving the data from the dictionary API
    setResults(response.data[0]);
  };

  const handlePhotos = (response) => {
    // Receiving the data from the pexel photos
    // console.log(response.data.photos);
    setPhoto(response.data.photos);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    /* documentation  https://api.dictionaryapi.dev/api/v2/entries/en/<word>*/
    const apiUrlDictionary = ` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrlDictionary).then(handleKeywordSearch);

    const apiKeyPhotos =
      "563492ad6f917000010000016cea332a7bd443d7b79039d1069a6ad3";
    const apiUrlPhotos = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    /*Authorisation using : const headers = { Authorization: `Bearer ${token}` };
     axios.get(URLConstants.USER_URL, { headers }); */
    const headers = { Authorization: `Bearer ${apiKeyPhotos}` };
    axios.get(apiUrlPhotos, { headers }).then(handlePhotos);
  };

  const keywordChange = (e) => {
    // The input given to the searchBar is stored here
    setKeyword(e.target.value);
  };

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSearch}>
          <span className="Dictionary-searchBar">
            <input
              type="search"
              onChange={keywordChange}
              placeholder="Search for a word  "
              className="Dictionary-search"
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
      <Photos photos={photo} />
    </div>
  );
};

export default Dictionary;
