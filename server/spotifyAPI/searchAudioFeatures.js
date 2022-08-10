import getArtistAlbums from "./getArtistAlbums.js";
import getArtistTracks from "./getArtistTracks.js";
import getTracksAudioFeatures from "./getTracksAudioFeatures.js";
import getUserAudioFeatures from "./userAudioFeatures.js";
import getRecommendations from "./getRecommedations.js";

/**
 * Gets audio features for all tracks in an artist's discography
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns []
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

  // get a user's audio features
  const userAudioFeatures = await getUserAudioFeatures(accessToken);
  console.log(userAudioFeatures);

  // process artist's audio features against user data
  const recs = getRecommendations(userAudioFeatures, tracksAudioFeatures);
  console.log(recs);

  return recs;
};

export default getArtistAudioFeatures;
