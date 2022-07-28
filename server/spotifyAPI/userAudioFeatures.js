import getAccessToken from "./reqAccessToken.js";
import getUserTopTracks from "./getUserTopTracks.js";

const getUserAudioFeatures = async (code) => {
  // generate access token
  const tokenData = await getAccessToken(code);

  // pass access token to get user's top played tracks
  const userTopTracks = await getUserTopTracks(tokenData.access_token);
  return userTopTracks;
};

// // get track audio features as map
// const trackAudioFeatures = await getArtistAudioFeatures(
//   accessToken,
//   artistTracks
// );
// console.log(trackAudioFeatures);

export default getUserAudioFeatures;
