const SearchBar = () => (
  // encompassing content div
  <div className="pt-20 -mt-20 h-screen pb-12 -mb-12">
    {/* search bar encompassed in flexbox container */}
    <div className="flex justify-center items-center h-12">
      <form className="w-full h-full px-12">
        <input
          className="rounded-full border-2 border-black w-full h-full px-6"
          type="text"
          placeholder="Search for an artist"
        />
      </form>
    </div>
  </div>
);

export default SearchBar;
