import getUserTopTracks from "./getUserTopTracks.js";
import getTracksAudioFeatures from "./getTracksAudioFeatures.js";

/**
 * Gets audio features for a user's top tracks
 * @param accessToken Access token provided after auth
 * @returns []
 */
const getUserAudioFeatures = async (accessToken) => {
  // get user's top tracks as an array
  const userTopTracks = await getUserTopTracks(accessToken);

  // get track audio features as array
  const trackAudioFeatures = await getTracksAudioFeatures(
    accessToken,
    userTopTracks
  );

  console.log(trackAudioFeatures);

  return trackAudioFeatures;
};

export default getUserAudioFeatures;
