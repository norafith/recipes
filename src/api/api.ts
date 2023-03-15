import { GetRecipesResponse } from "../types/apiTypes";

export const amountOfRecipesLoaded = 5;

const fetchForRecipesRequests = async <ResponseType>(
  urlPart: string,
  ...params: string[]
) => {
  const API_KEY = "c2f18046312d4d158b3223dbd5cc549f";
  const apiKeyString = `?apiKey=${API_KEY}`;
  const requestUrl = `https://api.spoonacular.com`;

  const resultRaw = await fetch(
    requestUrl + urlPart + apiKeyString + "&" + params.join("&"),
    {
      mode: "cors",
    }
  );
  const resultAsJson = await resultRaw.json();
  return resultAsJson as ResponseType;
};

const api = {
  async searchRecipe(
    searchQuery: string,
    pageNumber: number = 0
  ): Promise<GetRecipesResponse> {
    return await fetchForRecipesRequests<GetRecipesResponse>(
      "/recipes/complexSearch",
      `query=${searchQuery}`,
      `number=${amountOfRecipesLoaded}`,
      `offset=${(pageNumber - 1) * amountOfRecipesLoaded}`
    );
  },
};

export default api;
