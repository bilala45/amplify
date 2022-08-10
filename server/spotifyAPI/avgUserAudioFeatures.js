/**
 * Averages user audio features
 * @param audioFeatures Array of audio features for user's top played tracks
 * @returns []
 */
const avgUserAudioFeatures = (audioFeatures) => {
  // sum all audio features
  const avgAudioFeatures = audioFeatures.reduce((prev, curr) => ({
    danceability: prev.danceability + curr.danceability,
    energy: prev.energy + curr.energy,
    speechiness: prev.speechiness + curr.speechiness,
    acousticness: prev.acousticness + curr.acousticness,
    instrumentalness: prev.instrumentalness + curr.instrumentalness,
    liveness: prev.liveness + curr.liveness,
    valence: prev.valence + curr.valence,
    tempo: prev.tempo + curr.tempo,
  }));

  // average audio features
  for (const [key, value] of Object.entries(avgAudioFeatures)) {
    avgAudioFeatures[key] = Math.round(value / audioFeatures.length);
  }

  return avgAudioFeatures;
};

export default avgUserAudioFeatures;
