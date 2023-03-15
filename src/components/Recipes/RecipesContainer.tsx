import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import { addRecipes } from "../../store/reducers/recipesReducer";
import { RootState } from "../../store/store";
import Recipes from "./Recipes";

const RecipesContainer: React.FC = (props) => {
  const dispatch = useDispatch();
  const currentSearchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const resultsAmount = useSelector(
    (state: RootState) => state.search.resultsAmount
  );
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const handleLoadMore = () => {
    setIsLoading(true);
    api.searchRecipe(currentSearchQuery, currentPage + 1).then((response) => {
      dispatch(addRecipes(response.results));
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
    });
  };

  return (
    <Recipes
      resultsAmount={resultsAmount}
      isLoading={isLoading}
      loadMoreVisibility={
        recipes === null ||
        (Boolean(currentSearchQuery) && recipes.length !== 0)
      }
      recipes={recipes}
      handleLoadMore={handleLoadMore}
    />
  );
};

export default RecipesContainer;
