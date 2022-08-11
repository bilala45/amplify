import { BsSearch, BsMusicNote, BsCollectionPlay } from "react-icons/bs";

const AboutInstructions = () => (
  <div>
    <div className="hidden sm:block">
      <div className="grid grid-cols-3 justify-items-center pt-10 text-3xl gap-8">
        <div className="col-span-1 text-teal-600">
          <BsSearch />
        </div>
        <div className="col-span-1 text-teal-600">
          <BsMusicNote />
        </div>
        <div className="col-span-1 text-teal-600">
          <BsCollectionPlay />
        </div>
      </div>

      <div className="grid grid-cols-3 pt-6 gap-8 text-center">
        <div className="col-span-1">
          Use the search bar to search for an artist.
        </div>
        <div className="col-span-1">
          We'll analyze your top played songs over the last 6 months...
        </div>
        <div className="col-span-1">
          ...and use your listening data to suggest some songs by that artist.
        </div>
      </div>
    </div>

    <div className="sm:hidden mx-2">
      <div className="pt-8 flex items-center">
        <BsSearch className="text-lg mr-6 text-teal-600" />
        <div>Use the search bar to search for an artist.</div>
      </div>

      <div className="pt-4 flex items-center">
        <BsMusicNote className="text-2xl mr-6 text-teal-600" />
        <div>
          {" "}
          We'll analyze your top played songs over the last 6 months...
        </div>
      </div>

      <div className="pt-4 flex items-center">
        <BsCollectionPlay className="text-2xl mr-6 text-teal-600" />
        <div>
          ...and use your listening data to suggest some songs by that artist.
        </div>
      </div>
    </div>
  </div>
);

export default AboutInstructions;