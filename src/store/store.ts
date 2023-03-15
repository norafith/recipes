import { configureStore } from "@reduxjs/toolkit";
import recipes from "./reducers/recipesReducer";
import search from "./reducers/searchReducer";

export const store = configureStore({
  reducer: { recipes, search },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
