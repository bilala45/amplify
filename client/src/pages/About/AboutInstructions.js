import { BsSearch, BsMusicNote, BsCollectionPlay } from "react-icons/bs";

const AboutInstructions = () => (
  <div>
    <div className="hidden sm:block">
      <div className="grid grid-cols-3 justify-items-center pt-10 text-3xl gap-8">
        <div className="col-span-1">
          <BsSearch />
        </div>
        <div className="col-span-1">
          <BsMusicNote />
        </div>
        <div className="col-span-1">
          <BsCollectionPlay />
        </div>
      </div>

      <div className="grid grid-cols-3 pt-6 gap-8 text-center font-medium">
        <div className="col-span-1">
          Use the search bar to search for an artist.
        </div>
        <div className="col-span-1">
          We'll analyze your top played songs over the last month...
        </div>
        <div className="col-span-1">
          ...and use your listening history to suggest 5 songs by that artist.
        </div>
      </div>
    </div>

    <div className="sm:hidden">
      <div className="pt-8 flex items-center">
        <BsSearch className="text-xl mr-6" />
        <div>Use the search bar to search for an artist.</div>
      </div>

      <div className="pt-4 flex items-center">
        <BsMusicNote className="text-4xl mr-6" />
        <div>
          {" "}
          We'll analyze your top played songs over the last 6 months...
        </div>
      </div>

      <div className="pt-4 flex items-center">
        <BsCollectionPlay className="text-4xl mr-6" />
        <div>
          ...and use your listening data to suggest some songs by that artist.
        </div>
      </div>
    </div>
  </div>
);

export default AboutInstructions;
