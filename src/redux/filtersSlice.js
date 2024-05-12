import { createSlice } from "@reduxjs/toolkit";

const filtersInitState = { name: ""};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitState,
  reducers: {
      findContactFilter: (state, action) => {
          console.log("action:", action);
          console.log("state:", state);
          state.name = action.payload;
    },
  },
});

export const { findContactFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
