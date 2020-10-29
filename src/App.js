import React, { useState } from "react";
import SearchBar from "./Search";
import { SearchContext } from "./Contexts";
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  async function handleSearchChange(inputValue) {
      setSearchValue(inputValue);
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`
      );
      const data = await response.json();
      console.log(data)
      setResults(data.Search);
  }

  const SearchContextValue = {
      handleSearchChange,
      title: searchValue
  };
  return (
    <div className="App">
        <SearchContext.Provider value={SearchContextValue}>
            <SearchBar />
        </SearchContext.Provider>
    </div>
  );
}

export default App;
