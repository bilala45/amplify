import SearchArtistAlbum from "./SearchArtistAlbum";
import SearchRelatedArtists from "./SearchRelatedArtists";
import blankProfile from "../../assets/imgs/blank-profile.png";

const SearchArtistCard = ({
  artistMetadata,
  artistAlbums,
  relatedArtists,
  setIsLoading,
  setIsAlbumLoading,
  setArtistTracks,
  setArtistData,
}) => {
  // sets image for artists with no picture provided
  if (!artistMetadata.img.length) {
    artistMetadata.img = blankProfile;
  }

  return (
    <div>
      <div className="text-white font-bold text-2xl mb-3 lg:hidden">
        About the artist
      </div>
      <img src={artistMetadata.img} className="h-52" alt="artist"></img>
      <div className="font-bold text-2xl mt-4">{artistMetadata.name}</div>
      <div className="font-medium text-sm sm:text-base  mt-4">
        Filter results by album
      </div>

      <div className="flex flex-wrap mt-1">
        {artistAlbums.map((album) => (
          <SearchArtistAlbum
            album={album}
            artistId={artistMetadata.id}
            setIsAlbumLoading={setIsAlbumLoading}
            setArtistTracks={setArtistTracks}
          />
        ))}
      </div>

      <div className="font-medium text-sm sm:text-base mt-4">
        Related artists
      </div>
      <div className="flex justify-between sm:justify-start xs:flex-wrap mt-1">
        {relatedArtists.map((relatedArtist) => (
          <SearchRelatedArtists
            relatedArtist={relatedArtist}
            setIsLoading={setIsLoading}
            setArtistTracks={setArtistTracks}
            setArtistData={setArtistData}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchArtistCard;
