const SongResult = ({ name, explicit, albumName, duration, img }) => (
  <span className="flex items-center h-16 sm:h-20 mt-3 sm:mt-4 rounded-md bg-emerald-200 drop-shadow-xl shadow-black">
    <img
      className="h-14 sm:h-[72px] rounded-sm w-auto ml-1"
      src={img}
      alt="album cover"
    ></img>
    <div className="w-full text-sm sm:text-lg pl-2 sm:pl-3 overflow-hidden whitespace-nowrap">
      <div className="font-bold flex items-center">
        {name}
        {explicit ? (
          <span className="hidden sm:block mx-2 text-xs font-normal text-white bg-neutral-700 rounded-sm px-1.5 py-0.5">
            EXPLICIT
          </span>
        ) : (
          <span></span>
        )}
        {explicit ? (
          <span className="sm:hidden ml-2 text-xs font-md text-slate-100 bg-neutral-700 rounded-sm px-1 py-0.25">
            E
          </span>
        ) : (
          <span></span>
        )}
      </div>
      <div className="pt-1">{albumName}</div>
    </div>
    <div className="w-fit text-sm sm:text-base mx-3 sm:mx-4">{duration}</div>
  </span>
);

export default SongResult;
