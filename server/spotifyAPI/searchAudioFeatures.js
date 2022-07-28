import getAccessToken from "./reqAccessToken.js";
import getArtistId from "./GetSearchResults.js";
import getArtistAlbums from "./getArtistAlbums.js";
import getArtistTracks from "./getArtistTracks.js";
import getArtistAudioFeatures from "./getTracksAudioFeatures.js";

/**
 * Retrieves audio features for all tracks by some artist
 */
const getArtistAudioFeatures = async (code) => {
  // generate access token
  const tokenData = await getAccessToken(code);
  const accessToken = tokenData.access_token || null;

  // query artist and retrieve artist id
  const artistId = await getArtistId(accessToken, "Dua Lipa");

  // get artist albums as map
  const artistAlbums = await getArtistAlbums(accessToken, artistId);

  // get artist's tracks as map
  const artistTracks = await getArtistTracks(accessToken, artistAlbums);

  // get track audio features as map
  const trackAudioFeatures = await getArtistAudioFeatures(
    accessToken,
    artistTracks
  );

  return trackAudioFeatures;
};

export default getArtistAudioFeatures;
