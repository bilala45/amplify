import SearchExplicit from "./SearchExplicit";

const SearchRecommendations = ({
  name,
  explicit,
  albumName,
  duration,
  img,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="flex items-center h-16 sm:h-20 mt-3 sm:mt-4 text-white bg-neutral-6000 rounded-md hover:bg-neutral-600 hover:cursor-pointer "
  >
    <img
      className="h-14 sm:h-[4.5rem] rounded-sm w-auto ml-1"
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
  </a>
);

export default SearchRecommendations;
