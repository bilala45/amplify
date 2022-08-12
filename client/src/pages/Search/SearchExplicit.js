const SearchExplicit = ({ explicit }) => (
  <div>
    {explicit ? (
      <span className="hidden sm:block mx-2 text-xs font-normal text-white bg-neutral-500 rounded-sm px-1.5 py-0.5">
        EXPLICIT
      </span>
    ) : (
      <span></span>
    )}
    {explicit ? (
      <span className="sm:hidden ml-2 text-xs font-md text-white bg-neutral-700 rounded-sm px-1 py-0.25">
        E
      </span>
    ) : (
      <span></span>
    )}
  </div>
);

export default SearchExplicit;
