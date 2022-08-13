import { useState } from "react";

// import components
import Header from "../../components/Header";
import SearchBar from "./SearchBar";
import SearchRecommendations from "./SearchRecommendations";
import Loading from "../../components/Loading";
import SearchArtistCard from "./SearchArtistCard";

const SearchPage = () => {
  const [artistTracks, setArtistTracks] = useState([]);
  const [artistData, setArtistData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAlbumLoading, setIsAlbumLoading] = useState(false);

  return (
    <div className="bg-gradient-to-tl from-cyan-800 to-black px-8 sm:px-14 min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-auto max-w-screen-md">
          <div className="text-2xl sm:text-3xl text-center font-semibold pb-10 text-white">
            Your new favorite song is a search away.
          </div>

          <SearchBar
            setIsLoading={setIsLoading}
            setArtistTracks={setArtistTracks}
            setArtistData={setArtistData}
          />
        </div>

        {isLoading && (
          <div className="rounded-md text-center w-58 sm:w-fit mx-auto flex px-1 sm:pl-3 sm:pr-5 mt-16 sm:mt-60 items-center justify-center text-white">
            <Loading />
          </div>
        )}

        <div className="lg:grid grid-cols-3 max-w-screen-lg mx-auto">
          <div className="mt-10 sm:px-6 pb-10 lg:mb-24 col-span-2 items-center">
            {isAlbumLoading && (
              <div className="rounded-md text-center w-58 sm:w-fit mx-auto flex px-1 sm:pl-3 sm:pr-5 mt-16 sm:mt-60 items-center justify-center text-white">
                <Loading />
              </div>
            )}
            {artistTracks.length > 0 && (
              <div>
                <div className="text-white font-bold text-2xl lg:ml-2 mt-2">
                  Your results
                </div>
                {artistTracks.map((song) => (
                  <SearchRecommendations
                    key={song.id}
                    name={song.name}
                    explicit={song.explicit}
                    albumName={song.albumName}
                    duration={song.duration}
                    img={song.img}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="col-span-1 mt-6 lg:mt-14 pb-10 sm:pb-[8.5rem] rounded-md sm:pl-4 text-white">
            {Object.keys(artistData).length > 0 && (
              <SearchArtistCard
                artistMetadata={artistData.artistMetadata}
                artistAlbums={artistData.artistAlbums}
                relatedArtists={artistData.relatedArtists}
                setIsLoading={setIsLoading}
                setIsAlbumLoading={setIsAlbumLoading}
                setArtistTracks={setArtistTracks}
                setArtistData={setArtistData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
