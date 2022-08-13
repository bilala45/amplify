import getSearchResults from "../spotifyAPI/getSearchResults.js";
import getArtistAudioFeatures from "../spotifyAPI/searchAudioFeatures.js";
import getArtistData from "../spotifyAPI/getArtistData.js";
import getFilteredAudioFeatures from "../spotifyAPI/filterAudioFeatures.js";

// handles searches
const search = async (req, res) => {
  const { accessToken, searchInput } = req.query;
  const artistsObj = await getSearchResults(accessToken, searchInput);
  res.json(artistsObj);
};

// handles submitting after search
const submit = async (req, res) => {
  const { accessToken, artistId } = req.query;
  const artistDiscObj = await getArtistAudioFeatures(accessToken, artistId);
  const artistDataObj = await getArtistData(accessToken, artistId);
  res.json({ recs: artistDiscObj, artist: artistDataObj });
};

// handles filtering results by album
const filterByAlbum = async (req, res) => {
  const { accessToken, artistId, albumId } = req.query;
  const artistDiscObj = await getFilteredAudioFeatures(accessToken, albumId);
  res.json({ recs: artistDiscObj });
};

export { search, submit, filterByAlbum };
