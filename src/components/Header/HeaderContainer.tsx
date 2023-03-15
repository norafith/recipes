import Header from "./Header";
import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import useDebounce from "../../helpers/debounce";
import { setRecipes } from "../../store/reducers/recipesReducer";
import { GetRecipesResponse } from "../../types/apiTypes";
import {
  setSearchQuery as setGlobalSearchQuery,
  setSearchResultsAmount,
} from "./../../store/reducers/searchReducer";
import { RootState } from "../../store/store";

const HeaderContainer: React.FC = (props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  const debouncedSearchRecipe = useDebounce((searchQuery: string) => {
    api.searchRecipe(searchQuery).then((response: GetRecipesResponse) => {
      dispatch(setRecipes(response.results));
      dispatch(setGlobalSearchQuery(searchQuery));
      dispatch(setSearchResultsAmount(response.totalResults));
    });
  }, 500);

  useLayoutEffect(() => {
    if (recipes !== null || searchQuery !== "") {
      debouncedSearchRecipe(searchQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearchValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Header
      handleSearchValChange={handleSearchValChange}
      searchQuery={searchQuery}
    />
  );
};

export default HeaderContainer;
