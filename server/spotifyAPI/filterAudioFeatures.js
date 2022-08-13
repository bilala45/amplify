import getTracksAudioFeatures from "./getTracksAudioFeatures.js";
import getUserAudioFeatures from "./userAudioFeatures.js";
import getRecommendations from "./getRecommedations.js";
import getTracksForOneAlbum from "./getTracksForOneAlbum.js";
import getAlbumMetadata from "./getAlbumMetadata.js";

/**
 * Gets audio features for all tracks in an artist's discography
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns []
 */
const getFilteredAudioFeatures = async (accessToken, albumId) => {
  // get information about album
  const albumMetadata = await getAlbumMetadata(accessToken, albumId);

  // get album's tracks as array
  const artistTracks = await getTracksForOneAlbum(
    accessToken,
    albumId,
    albumMetadata
  );

  // get track audio features as array
  const tracksAudioFeatures = await getTracksAudioFeatures(
    accessToken,
    artistTracks
  );

  // get a user's audio features
  const userAudioFeatures = await getUserAudioFeatures(accessToken);

  // process artist's audio features against user data
  const recs = getRecommendations(userAudioFeatures, tracksAudioFeatures);

  return recs;
};

export default getFilteredAudioFeatures;
