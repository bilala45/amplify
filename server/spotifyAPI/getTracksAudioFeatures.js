import getAccessToken from "./reqAccessToken.js";
import artistTracks from "./getArtistTracks.js";
import qs from "qs";
import axios from "axios";

// generate access token
const accessToken = await getAccessToken();

// map to store audio features with track ids as keys
const audioFeaturesMap = new Map();

// iterate through ids in artistTracks and set as keys in map
for (const [key, value] of artistTracks) {
  audioFeaturesMap.set(value.id, { name: key });
}

// generate id strings to pass as query to api call
const createIdStrings = () => {
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

const idGroups = createIdStrings();

// retrieve audio features for each group of ids
for (const idGroup of idGroups) {
  // query parameters
  const audioFeatureParams = qs.stringify({ ids: idGroup });

  // payload for get request to Spotify API to retrieve track audio features
  const payload = {
    method: "GET",
    url: `https://api.spotify.com/v1/audio-features?${audioFeatureParams}`,
    headers: {
      // access token
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  // retrieve audio features
  const getAudioFeatures = async () => {
    // axios GET request
    try {
      // store response object and return items
      const res = await axios(payload);
      return res.data.audio_features;
    } catch (error) {
      console.log(error);
    }
  };

  const data = await getAudioFeatures();

  for (const item of data) {
    audioFeaturesMap.set(item.id, {
      ...audioFeaturesMap.get(item.id),
      danceability: item.danceability,
      energy: item.energy,
      key: item.key,
      loudness: item.loudness,
      mode: item.mode,
      speechiness: item.speechiness,
      acousticness: item.acousticness,
      instrumentalness: item.instrumentalness,
      liveness: item.liveness,
      valence: item.valence,
      tempo: item.tempo,
      duration_ms: item.duration_ms,
    });
  }
}

console.log(audioFeaturesMap);
