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

  return (
    <div className="bg-gradient-to-tl from-slate-900 to-black px-8 sm:px-14 min-h-screen">
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

        {isLoading && <Loading />}

        {artistTracks.length > 0 && (
          <div className="grid grid-cols-3 max-w-screen-lg mx-auto">
            {/* display song results */}

            <div className="mt-10 sm:px-6 pb-10 mb-24 col-span-2 items-center">
              <div className="text-white font-bold text-2xl ml-2 mt-2">
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

            <SearchArtistCard
              artistMetadata={artistData.artistMetadata}
              relatedArtists={artistData.relatedArtists}
              setIsLoading={setIsLoading}
              setArtistTracks={setArtistTracks}
              setArtistData={setArtistData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
