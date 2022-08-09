import AlbumCover from "../assets/TheMelodicBlue.jpg";

const SongResult = ({ name, explicit, albumName, duration, img }) => (
  <span className="flex items-center max-h-16 rounded-xl bg-emerald-200 mt-4 drop-shadow-xl shadow-black">
    <img
      className="max-h-14 w-auto rounded-lg ml-1"
      src={img}
      alt="album cover"
    ></img>
    <div className="flex w-full justify-between items-center">
      <div className="p-4">
        <div className="flex items-center">
          <div className="text-lg font-bold tracking-wider">{name}</div>
          {explicit ? (
            <span className="mx-2 text-xs font-md text-slate-100 bg-neutral-700 rounded-sm px-2 py-0.5">
              EXPLICIT
            </span>
          ) : (
            <span></span>
          )}
        </div>
        <div>{albumName}</div>
      </div>
      <div className="p-4">{duration}</div>
    </div>
  </span>
);

export default SongResult;
