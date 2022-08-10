const getRecommendations = (userAudioFeats, artistAudioFeats) => {
  // iterate through each element of artistAudioFeats and subtract it from your value (make sure to take the absolute value)
  for (const track of artistAudioFeats) {
    // helper function to calculate difference between tracks and user values
    const calculateAbsDifference = (feature) => {
      track[feature] = Math.abs(track[feature] - userAudioFeats[feature]);
    };

    // replace each audio feature with absolute value of difference
    calculateAbsDifference("danceability");
    calculateAbsDifference("energy");
    calculateAbsDifference("loudness");
    calculateAbsDifference("speechiness");
    calculateAbsDifference("acousticness");
    calculateAbsDifference("instrumentalness");
    calculateAbsDifference("liveness");
    calculateAbsDifference("valence");
    calculateAbsDifference("tempo");
  }

  // helper function to sort tracks
  const sortTracksByFeature = (feature) => {
    artistAudioFeats.sort(
      (firstTrack, secondTrack) => firstTrack[feature] - secondTrack[feature]
    );

    // assign scores for each feature value
    let length = artistAudioFeats.length;
    for (const track of artistAudioFeats) {
      track[feature] = length;
      length -= 1;
    }
  };

  sortTracksByFeature("danceability");
  sortTracksByFeature("energy");
  sortTracksByFeature("loudness");
  sortTracksByFeature("speechiness");
  sortTracksByFeature("acousticness");
  sortTracksByFeature("instrumentalness");
  sortTracksByFeature("liveness");
  sortTracksByFeature("valence");
  sortTracksByFeature("tempo");

  // sum audio feature values to get track scores
  for (const track of artistAudioFeats) {
    track["totalScore"] =
      track.danceability +
      track.energy +
      track.speechiness +
      track.loudness +
      track.acousticness +
      track.instrumentalness +
      track.liveness +
      track.valence +
      track.tempo;
  }

  // sort tracks by score (descending)
  artistAudioFeats.sort(
    (firstTrack, secondTrack) => secondTrack.totalScore - firstTrack.totalScore
  );

  // return songs with top 5 scores
  return artistAudioFeats.slice(0, 5);
};

export default getRecommendations;
