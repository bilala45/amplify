import getAccessToken from "./reqAccessToken.js";
import getUserTopTracks from "./getUserTopTracks.js";
import getAudioFeatures from "./getTracksAudioFeatures.js";

/**
 * Retrieves audio features for a user's top tracks
 */
const getUserAudioFeatures = async (code) => {
  // generate access token
  const tokenData = await getAccessToken(code);
  const accessToken = tokenData.access_token;

  // pass access token to get user's top played tracks
  const userTopTracks = await getUserTopTracks(accessToken);

  // get track audio features as map
  const trackAudioFeatures = await getAudioFeatures(accessToken, userTopTracks);
  //console.log(trackAudioFeatures);
  return trackAudioFeatures;
};

export default getUserAudioFeatures;
