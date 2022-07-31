import AlbumCover from "../assets/TheMelodicBlue.jpg";

const SongResult = () => (
  <span className="flex items-center max-w-screen-md max-h-16 rounded-xl bg-emerald-200 drop-shadow-xl shadow-black mt-8">
    <img
      className="max-h-20 w-auto rounded-xl"
      src={AlbumCover}
      alt="album cover"
    ></img>
    <div className="flex w-full justify-between items-center">
      <div className="p-4">
        <div className="flex items-center">
          <div className="text-lg font-bold tracking-wider">
            family ties (with Kendrick Lamar)
          </div>
          <span className="mx-2 text-xs font-md text-slate-100 bg-neutral-700 rounded-sm px-2 py-0.5">
            EXPLICIT
          </span>
        </div>
        <div>The Melodic Blue</div>
      </div>
      <div className="p-4">4:12</div>
    </div>
  </span>
);

export default SongResult;
