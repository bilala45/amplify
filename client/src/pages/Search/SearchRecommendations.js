import SearchExplicit from "./SearchExplicit";

const SearchRecommendations = ({
  name,
  explicit,
  albumName,
  duration,
  img,
}) => (
  <span className="flex items-center h-16 sm:h-20 mt-3 sm:mt-4 rounded-md text-white bg-neutral-700">
    <img
      className="h-14 sm:h-[72px] rounded-sm w-auto ml-1"
      src={img}
      alt="album cover"
    ></img>
    <div className="w-full text-sm sm:text-lg pl-2 sm:pl-0 sm:ml-3 truncate">
      <div className="font-medium flex items-center">
        {name} <SearchExplicit explicit={explicit} />
      </div>
      <div className="pt-1 text-sm font-semibold">{albumName}</div>
    </div>
    <div className="w-fit text-sm sm:text-base mx-3 sm:mx-4">{duration}</div>
  </span>
);

export default SearchRecommendations;
