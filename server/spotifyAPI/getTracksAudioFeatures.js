import qs from "qs";
import axios from "axios";

/**
 * Helper method to generate array of track id strings in groups of 100
 */
const createIdStrings = (artistTracks) => {
  let trackIds = [];

  // iterate through ids in artistTracks
  for (const track of artistTracks.values()) {
    trackIds.push(track.id);
  }

  // create groups of 100 songs to make requests for audio features
  const idGroups = [];
  for (let i = 0; i < Math.ceil(artistTracks.size / 100); i++) {
    // separate each group of 100 track ids
    const group = trackIds.slice(i * 100, i * 100 + 100).join(",");
    idGroups.push(group);
  }

  return idGroups;
};

/**
 * Helper method to get audio features for a group of tracks
 */
const getGroupAudioFeatures = async (accessToken, idGroup) => {
  // query parameters
  const audioFeatureParams = qs.stringify({ ids: idGroup });

  // payload for get request to Spotify API to retrieve track audio features
  const payload = {
    method: "GET",
    url: `https://api.spotify.com/v1/audio-features?${audioFeatureParams}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data.audio_features;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Gets audio features for artist's tracks
 * key: track name, values: { track id }
 */
const getArtistAudioFeatures = async (accessToken, artistTracks) => {
  // map to store track audio features
  const audioFeaturesMap = new Map();

  // iterate through ids in artistTracks and set as keys in map
  for (const [key, value] of artistTracks) {
    audioFeaturesMap.set(value.id, { name: key });
  }

  // genearate id groups to pass into api call
  const idGroups = createIdStrings(artistTracks);

  // retrieve audio features for each group of ids
  for (const idGroup of idGroups) {
    // get audio features for group
    const groupAudioFeatures = await getGroupAudioFeatures(
      accessToken,
      idGroup
    );

    // add group's audio features to map
    for (const track of groupAudioFeatures) {
      audioFeaturesMap.set(track.id, {
        ...audioFeaturesMap.get(track.id),
        danceability: track.danceability,
        energy: track.energy,
        key: track.key,
        loudness: track.loudness,
        mode: track.mode,
        speechiness: track.speechiness,
        acousticness: track.acousticness,
        instrumentalness: track.instrumentalness,
        liveness: track.liveness,
        valence: track.valence,
        tempo: track.tempo,
        duration_ms: track.duration_ms,
      });
    }
  }

  return audioFeaturesMap;
};

export default getArtistAudioFeatures;
