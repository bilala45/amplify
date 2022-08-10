import getUserTopTracks from "./getUserTopTracks.js";
import getTracksAudioFeatures from "./getTracksAudioFeatures.js";
import avgUserAudioFeatures from "./avgUserAudioFeatures.js";

/**
 * Retrieves and processes audio features for a user's top tracks
 * @param accessToken Access token provided after auth
 * @returns {danceability, energy, speechiness, acousticness, instrumentalness, liveness, valence, tempo}
 */
const getUserAudioFeatures = async (accessToken) => {
  // get user's top tracks as an array
  const userTopTracks = await getUserTopTracks(accessToken);

  // get track audio features as array
  const trackAudioFeatures = await getTracksAudioFeatures(
    accessToken,
    userTopTracks
  );

  const processedUserFeatures = avgUserAudioFeatures(trackAudioFeatures);

  return processedUserFeatures;
};

export default getUserAudioFeatures;
