import React, {useContext} from "react";
import { SearchContext } from "../Contexts";
import './style.css';
import SearchList from "./SearchList";

const SearchBar = () => {
    const { title, handleSearchChange } = useContext(SearchContext);
    return <div className="search">
    <input
        type="search"
        name="movie-search"
        value={title}
        onChange={e => handleSearchChange(e.target.value)}
    />
    {title!== '' && <SearchList/>}
    </div>
}
export default SearchBar;
