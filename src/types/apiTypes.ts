interface GetRecipesResponse {
  results: Array<Recipe>;
  totalResults: number;
}

interface Recipe {
  id: number;
  image: string;
  title: string;
}

export { type GetRecipesResponse, type Recipe };
