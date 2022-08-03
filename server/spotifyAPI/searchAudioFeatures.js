import getArtistAlbums from "./getArtistAlbums.js";
import getArtistTracks from "./getArtistTracks.js";
import getTracksAudioFeatures from "./getTracksAudioFeatures.js";

/**
 * Retrieves audio features for all tracks by some artist
 */
const getArtistAudioFeatures = async (accessToken, artistId) => {
  // get artist albums as array
  const artistAlbums = await getArtistAlbums(accessToken, artistId);

  // get artist's tracks as array
  const artistTracks = await getArtistTracks(accessToken, artistAlbums);

  // get track audio features as array
  const tracksAudioFeatures = await getTracksAudioFeatures(
    accessToken,
    artistTracks
  );

  return tracksAudioFeatures;
};

// getArtistAudioFeatures(
//   "BQBJblbpCfYeQCSPKh2gpX302osl4CwCby3rmxQw--iALoLoh_jdOUO75PVzjrwswITQOukSLE0bdFGDhyLZkwtPTL0irlDrqvt1Cj6e_XQYyiYkPutK9HVAHv0x-0xLaNHMcTwvsiQT4xAFSCeUkzXF0--eAaGWoQDdKUrJQPoq1zM",
//   "66CXWjxzNUsdJxJ2JdwvnR"
// );

export default getArtistAudioFeatures;
