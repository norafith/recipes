import { amountOfRecipesLoaded } from "../../api/api";
import { Recipe } from "../../types/apiTypes";
import classes from "./Recipes.module.css";

interface RecipesProps {
  resultsAmount: number;
  isLoading: boolean;
  loadMoreVisibility: boolean;
  recipes: Array<Recipe> | null;
  handleLoadMore: () => void;
}

const Recipes: React.FC<RecipesProps> = (props) => {
  if (props.recipes === null) {
    return <></>;
  }
  if (props.recipes.length === 0) {
    return <div>"No results with such search query."</div>;
  }

  const recipesElementsArray = [];
  for (let recipeObj of props.recipes) {
    recipesElementsArray.push(<li>{recipeObj.title}</li>);
  }

  const pageSelectionButtons = [];
  for (let i = 1; i <= props.resultsAmount / amountOfRecipesLoaded + 1; ++i) {
    pageSelectionButtons.push(
      <button
        onClick={() => {
          /* set page*/
        }}
        key={i}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <ul>{recipesElementsArray}</ul>
      <div>
        <button
          onClick={() => {
            /* previous page */
          }}
        >
          {"<"}
        </button>
        <span>{pageSelectionButtons}</span>
        <button
          onClick={() => {
            /* next page */
          }}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Recipes;
