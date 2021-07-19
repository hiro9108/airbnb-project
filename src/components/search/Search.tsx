import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { setSearchItem } from "../../features/searchSlice";

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
          {...register("search", { required: true })}
          onChange={handleSearch}
          className="search_text"
          type="text"
          placeholder="Search"
        />
        {errors.search && <p>Please enter what you would like to search.</p>}

        <input type="submit" value="&#xF002;" className="submit_btn" />
      </form>
    </div>
  );
};

export default Search;
