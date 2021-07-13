import React from "react";
import { useDispatch } from "react-redux";
import { setSearchItem } from "../../../features/searchSlice";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchItem(e.target.value));
  };

  return (
    <div className="seach_wrapper">
      <form className="search_container" method="get" action="#">
        <input
          onChange={handleSearch}
          className="search_text"
          type="text"
          placeholder="Search"
        />
        <img src="/search-solid.svg" className="submit" />
      </form>
    </div>
  );
};

export default Search;
