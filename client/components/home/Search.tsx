import React from "react";

const Search = () => {
  return (
    <div className="seach_wrapper">
      <form className="search_container" method="get" action="#">
        <input className="search_text" type="text" placeholder="Search" />
        <img src="/search-solid.svg" className="submit" />
      </form>
    </div>
  );
};

export default Search;
