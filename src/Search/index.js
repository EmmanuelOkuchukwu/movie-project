import React, {useContext} from "react";
import { SearchContext } from "../Contexts";
import './style.css';

const SearchBar = () => {
    const { title, handleSearchChange } = useContext(SearchContext);
    return <div className="search">
    <input
        type="search"
        name="movie-search"
        value={title}
        onChange={e => handleSearchChange(e.target.value)}
    />
    </div>
}
export default SearchBar;
