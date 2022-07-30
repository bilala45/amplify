import Kendrick from "../assets/KendrickArtist.jpg";

const Artist = () => (
  <span className="flex items-center max-w-fit rounded-xl bg-emerald-200 drop-shadow-xl shadow-black">
    <img
      className="rounded-l-xl max-h-16 w-auto"
      src={Kendrick}
      alt="Kendrick Lamar"
    ></img>
    <div className="text-lg font-bold tracking-wider pl-6 pr-8">
      Kendrick Lamar
    </div>
  </span>
);

export default Artist;
