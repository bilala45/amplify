import { useState } from "react";

// import components
import Header from "../../components/Header";
import SearchBar from "./SearchBar";
import SearchRecommendations from "./SearchRecommendations";
import Loading from "../../components/Loading";

const SearchPage = () => {
  const [artistTracks, setArtistTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 sm:px-14 min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-auto max-w-screen-md">
          <div className="text-2xl sm:text-3xl text-center font-semibold pb-10">
            Your new favorite song is a search away.
          </div>

          <SearchBar
            setIsLoading={setIsLoading}
            setArtistTracks={setArtistTracks}
          />

          {isLoading && <Loading />}

          {/* display song results */}
          <div className="pt-10 sm:px-6 pb-24">
            {artistTracks.length > 0 &&
              artistTracks.map((song) => (
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
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
