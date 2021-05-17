import { createSlice } from "@reduxjs/toolkit";
// import { searchProp } from "../types";

export interface SeachState {
  searchItem: string;
}

const initialState: SeachState = {
  searchItem: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});

export const { setSearchItem } = searchSlice.actions;

export const selectSearchItem = (state) => state.search.searchItem;

export default searchSlice.reducer;
