import getSearchResults from "./getSearchResults.js";

/**
 * Retrieves a user's search results
 */
const getUserSearchResults = async (accessToken) => {
  // pass access token to get user's search results
  const searchResults = await getSearchResults(accessToken);

  return searchResults;
};

export default getUserSearchResults;
