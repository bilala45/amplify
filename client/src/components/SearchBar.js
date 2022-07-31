const SearchBar = () => (
  <div className="flex justify-center items-center h-12">
    <form className="w-full h-full px-12">
      <input
        className="rounded-full border-2 border-black w-full h-full px-6"
        type="text"
        placeholder="Search for an artist"
      />
    </form>
  </div>
);

export default SearchBar;
