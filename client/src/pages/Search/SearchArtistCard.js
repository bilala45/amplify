import Drake from "../../assets/imgs/KendrickArtist.jpg";
import morale from "../../assets/imgs/morale.jpg";
import damn from "../../assets/imgs/damn.jpg";
import uu from "../../assets/imgs/uu.jpg";
import tpab from "../../assets/imgs/tpab.jpg";
import gkmc from "../../assets/imgs/gkmc.jpg";
import od from "../../assets/imgs/od.jpg";

const SearchArtistCard = () => (
  <div className="col-span-1 mt-14 mb-[8.5rem] rounded-md pl-4 text-white">
    <img src={Drake} className="h-52"></img>
    <div className="font-bold text-2xl mt-4">Kendrick Lamar</div>
    <div className="font-medium text-sm mt-4">Filter results by album</div>
    <div className="flex flex-wrap mt-1">
      <img src={morale} className="h-16 mr-1 mt-1"></img>
      <img src={damn} className="h-16 mr-1 mt-1"></img>
      <img src={uu} className="h-16 mr-1 mt-1"></img>
      <img src={tpab} className="h-16 mr-1 mt-1"></img>
      <img src={gkmc} className="h-16 mr-1 mt-1"></img>
      <img src={od} className="h-16 mr-1 mt-1"></img>
    </div>
    <div className="font-medium text-sm mt-4">Related artists</div>
    <div className="flex flex-wrap mt-1">
      <img src={morale} className="h-14 mr-1 mt-1 rounded-full"></img>
      <img src={damn} className="h-14 mr-1 mt-1 rounded-full"></img>
      <img src={uu} className="h-14 mr-1 mt-1 rounded-full"></img>
      <img src={tpab} className="h-14 mr-1 mt-1 rounded-full"></img>
      <img src={gkmc} className="h-14 mr-1 mt-1 rounded-full"></img>
    </div>
  </div>
);

export default SearchArtistCard;
