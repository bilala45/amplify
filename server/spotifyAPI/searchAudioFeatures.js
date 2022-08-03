import getArtistAlbums from "./getArtistAlbums.js";
import getArtistTracks from "./getArtistTracks.js";
import getAudioFeatures from "./getTracksAudioFeatures.js";

/**
 * Retrieves audio features for all tracks by some artist
 */
const getArtistAudioFeatures = async (accessToken, artistId) => {
  // get artist albums as array
  const artistAlbums = await getArtistAlbums(accessToken, artistId);

  // get artist's tracks as array
  const artistTracks = await getArtistTracks(accessToken, artistAlbums);
  console.log(artistTracks);

  // // get track audio features as map
  // const trackAudioFeatures = await getAudioFeatures(accessToken, artistTracks);

  // return trackAudioFeatures;
};

getArtistAudioFeatures(
  "BQBf-pAwix6i8NJ7vlbODL5m7tPuEwH7w1O9YB5e9NZGXcoHD3bC_TcvEl_rJv6fRfTSIC3tvQf-AAXwVbzXxA5d91nWGIXk5J_4uOU3asPy-DmBaNoXAi4kkUnPOikyMLczhJWIfNibvJjnoyD0q_49uVShF5mCb_wyfZOg8EuCCwM",
  "66CXWjxzNUsdJxJ2JdwvnR"
);

export default getArtistAudioFeatures;
