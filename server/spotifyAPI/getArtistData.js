import getArtistMetadata from "./getArtistMetadata.js";
import getArtistRelatedArtists from "./getArtistRelatedArtists.js";

/**
 * Gets data about an artist
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns []
 */
const getArtistData = async (accessToken, artistId) => {
  // get artist metadata
  const artistMetadata = await getArtistMetadata(accessToken, artistId);

  //   // get artist's albums
  //   const artistAlbums = await getArtistAlbums(accessToken, artistId);

  // get artist's related artists
  const relatedArtists = await getArtistRelatedArtists(accessToken, artistId);

  const artistData = {
    artistMetadata,
    relatedArtists,
  };

  console.log(artistData);

  return artistData;
};

// getArtistData(
//   "BQDRdD1TDaOEHhvMhgXulaLbYYrm0_ghm-izRo1yxFO_Nvq4XcgBHU3vzQ7n5npiD0OEwQYNGOJldV73jOgPtqPHsPIFdPFHfmP-uqVmSjk2cIbkFTIvoMmg2s__uJrrvrzTVRVZpi8l6BslhbKnWmv0kPK4M3gumsVy_fxhqW9HoZk",
//   "66CXWjxzNUsdJxJ2JdwvnR"
// );

export default getArtistData;
