import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { setSearchItem } from "../../../features/searchSlice";
import "font-awesome/css/font-awesome.min.css";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchItem(e.target.value));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="seach_wrapper">
      <form
        className="search_container"
        method="get"
        action="#"
        onClick={handleSubmit(onSubmit)}
      >
        <input
          onChange={handleSearch}
          className="search_text"
          type="text"
          placeholder="Search"
        />
        <input type="submit" value="&#xF002;" className="submit_btn" />
      </form>
    </div>
  );
};

export default Search;
