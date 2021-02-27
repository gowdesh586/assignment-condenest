import React, { useState, useEffect } from "react";
import Results from "./Results";
import axios from "axios";

const SearchParams = () => {
  const [articles, setArticles] = useState([]);
  const [phrase, updatePhrases] = useState("");
  const serverUrl = "http://localhost:3000";

  useEffect( () => {
      async function news(){
          const response = await axios.get(`${serverUrl}/top-head-lines`);
          setArticles(response.data.articles);
      }
      news();
  },[]);


  async function requestNews() {
      const phraseEncode = encodeURI(phrase);
       const response = await axios.get(`${serverUrl}/top-head-lines?q=${phraseEncode}&country=gb`);
      setArticles(response.data.articles);
  }

  return (
      <div>
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    requestNews();
                }}
            >
                <label htmlFor="phrase">
                    Keyword search {"  "}
                    <input
                        id="phrases"
                        value={phrase}
                        onChange={e => updatePhrases(e.target.value)}
                    />
                    <button>Submit</button>
                </label>
            </form>
          <Results articles={articles} />
        </div>
      </div>
  );
};

export default SearchParams;