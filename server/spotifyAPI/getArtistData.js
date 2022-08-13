import getArtistMetadata from "./getArtistMetadata.js";
import getArtistAlbums from "./getArtistAlbums.js";
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

  // get artist's albums
  const artistAlbums = await getArtistAlbums(accessToken, artistId);

  // get artist's related artists
  const relatedArtists = await getArtistRelatedArtists(accessToken, artistId);

  const artistData = {
    artistMetadata,
    artistAlbums,
    relatedArtists,
  };

  return artistData;
};

// getArtistData(
//   "BQDIfxJ7QuPCWb_QTfYqAbA2P3ScBP_CbtKcMaGAHJu_W4LwUabrWcOMYJGWVgyT1O9Jg0vBNldsNbaHdvdvkOoTfnbgl3FZadhRVPEr0zJ2eB2yLktW-_DJahceUVINEMaXdeV_FOJ_vz9ESJDv8lHG7Cper_nyR7ruHGuxH2KnLZw",
//   "66CXWjxzNUsdJxJ2JdwvnR"
// );

export default getArtistData;
