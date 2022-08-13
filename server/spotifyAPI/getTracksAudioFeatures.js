import qs from "qs";
import axios from "axios";

/**
 * Helper method to create groups of 100 track ids
 * @param tracks Array of tracks
 * @returns []
 */
const createIdStrings = (tracks) => {
  // array of track ids
  const trackIds = tracks.map((track) => {
    return track.id;
  });

  // create groups of 100 songs as elements in array
  const idGroups = [];
  while (trackIds.length) {
    idGroups.push(trackIds.splice(0, 100).join(","));
  }

  return idGroups;
};

/**
 * Queries Spotify API for tracks' audio features
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features
 * @param accessToken Access token provided after auth
 * @param idGroup Group of track ids (up to 100 ids)
 * @returns [Promise]
 */
const reqTracksAudioFeatures = async (accessToken, idGroup) => {
  const queryParams = qs.stringify({ ids: idGroup });

  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/audio-features?${queryParams}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return res.data.audio_features;
  } catch (error) {
    console.log(error.response.data);
  }
};

/**
 * Gets audio features for an array of tracks
 * @param accessToken Access token provided after auth
 * @param tracks Array of tracks
 * @returns [Promise]
 */
const getTracksAudioFeatures = async (accessToken, tracks) => {
  // iterate through ids in tracks and set as keys that map to track's name
  // audio features endpoint doesn't return the track name so we use the id to find the song name
  const audioFeaturesMap = {};
  for (const track of tracks) {
    audioFeaturesMap[track.id] = {
      name: track.name,
      explicit: track.explicit,
      albumName: track.albumName,
      duration: track.duration,
      img: track.img,
    };
  }

  // create id groups to pass to api call
  const idGroups = createIdStrings(tracks);

  // retrieve audio features for each id in idGroups and add to array
  const trackAudioFeatures = [];
  for (const idGroup of idGroups) {
    const groupAudioFeatures = await reqTracksAudioFeatures(
      accessToken,
      idGroup
    );

    // add each track's audio features to array
    for (const track of groupAudioFeatures) {
      if (track !== null) {
        trackAudioFeatures.push({
          name: audioFeaturesMap[track.id].name,
          explicit: audioFeaturesMap[track.id].explicit,
          albumName: audioFeaturesMap[track.id].albumName,
          duration: audioFeaturesMap[track.id].duration,
          img: audioFeaturesMap[track.id].img,
          id: track.id,
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
        });
      }
    }
  }

  return trackAudioFeatures;
};

export default getTracksAudioFeatures;
