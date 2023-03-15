import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearchQuery = createAction<string>("search/updateSearchQuery");
export const setSearchResultsAmount = createAction<number>(
  "search/setSearchResultsAmount"
);

const initialState = { searchQuery: "", resultsAmount: 0 };

const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSearchQuery, (state, action) => {
    state.searchQuery = action.payload as unknown as string;
  });

  builder.addCase(setSearchResultsAmount, (state, action) => {
    state.resultsAmount = action.payload;
  });
});

export default searchReducer;
