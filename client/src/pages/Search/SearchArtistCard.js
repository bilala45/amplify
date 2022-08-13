import SearchArtistAlbum from "./SearchArtistAlbum";
import SearchRelatedArtists from "./SearchRelatedArtists";

const SearchArtistCard = ({
  artistMetadata,
  artistAlbums,
  relatedArtists,
  setIsLoading,
  setIsAlbumLoading,
  setArtistTracks,
  setArtistData,
}) => {
  return (
    <div>
      <img src={artistMetadata.img} className="h-52" alt="artist"></img>
      <div className="font-bold text-2xl mt-4">{artistMetadata.name}</div>
      <div className="font-medium text-sm mt-4">Filter results by album</div>

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

      <div className="font-medium text-sm mt-4">Related artists</div>
      <div className="flex flex-wrap mt-1">
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
