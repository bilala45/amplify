import { BsSearch, BsMusicNote, BsCollectionPlay } from "react-icons/bs";

const AboutInstructions = () => (
  <div>
    <div className="hidden sm:block">
      <div className="grid grid-cols-3 justify-items-center pt-10 text-2xl gap-8">
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

      <div className="grid grid-cols-3 pt-4 gap-8 text-center">
        <div className="col-span-1">
          Use the search bar to search for an artist.
        </div>
        <div className="col-span-1">
          We'll analyze your listening history from the last 6 months.
        </div>
        <div className="col-span-1">
          You'll get 5 songs by that artist that we think you'll like best.
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
        <div>We'll analyze your listening history from the last 6 months.</div>
      </div>

      <div className="pt-4 flex items-center">
        <BsCollectionPlay className="text-2xl mr-6 text-teal-600" />
        <div>
          You'll get 5 songs by that artist that we think you'll like best.
        </div>
      </div>
    </div>
  </div>
);

export default AboutInstructions;
