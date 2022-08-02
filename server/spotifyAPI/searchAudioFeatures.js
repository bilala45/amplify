import getArtistAlbums from "./getArtistAlbums.js";
import getArtistTracks from "./getArtistTracks.js";
import getAudioFeatures from "./getTracksAudioFeatures.js";

/**
 * Retrieves audio features for all tracks by some artist
 */
const getArtistAudioFeatures = async (accessToken, artistId) => {
  // get artist albums as map
  const artistAlbums = await getArtistAlbums(accessToken, artistId);

  // get artist's tracks as map
  const artistTracks = await getArtistTracks(accessToken, artistAlbums);

  // get track audio features as map
  const trackAudioFeatures = await getAudioFeatures(accessToken, artistTracks);

  return trackAudioFeatures;
};

export default getArtistAudioFeatures;
