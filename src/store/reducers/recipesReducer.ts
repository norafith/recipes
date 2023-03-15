import { createAction, createReducer } from "@reduxjs/toolkit";
import { Recipe } from "../../types/apiTypes";

export const setRecipes = createAction<Array<Recipe>>("recipes/setRecipes");
export const addRecipes = createAction<Array<Recipe>>("recipes/addRecipes");
export const setCurrentRecipePage = createAction<Recipe>(
  "recipes/setCurrentRecipePage"
);

interface RecipesState {
  recipes: Array<Recipe> | null;
  currentRecipe: Recipe | null;
}

const initialState: RecipesState = { recipes: null, currentRecipe: null };

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRecipes, (state, action) => {
    state.recipes = action.payload;
  });

  builder.addCase(addRecipes, (state, action) => {
    action.payload.forEach((recipeObj: Recipe) => {
      if (state.recipes) {
        state.recipes.push(recipeObj);
      }
    });
  });
});

export default recipesReducer;
