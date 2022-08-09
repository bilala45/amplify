import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUserCreds } from "../spotify.js";
import { BsSearch, BsMusicNote, BsCollectionPlay } from "react-icons/bs";

const AboutModal = () => {
  // retrieve tokens from url params on initial render
  useEffect(() => {
    setUserCreds();
  }, []);

  // router hook to navigate to different react page
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="bg-slate-200 rounded-md mb-24 px-6 md:px-14 py-10 text-center max-w-screen-md shadow-2xl shadow-slate-700">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Welcome to amplify!
        </h1>
        <div className="text-md sm:text-lg text-left">
          <div className="pt-6 sm:pt-6 text-center">
            Let's make sure we're all on the same page.
          </div>

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
                You'll get 5 songs by that artist that we think you'll like
                best.
              </div>
            </div>
          </div>

          <div className="sm:hidden mx-2">
            <div className="pt-8 flex justify-between items-center">
              <BsSearch className="text-xl mr-6 text-teal-600" />
              <div>Use the search bar to search for an artist.</div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <BsMusicNote className="text-3xl mr-6 text-teal-600" />
              <div>
                We'll analyze your listening history from the last 6 months.
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <BsCollectionPlay className="text-3xl mr-6 text-teal-600" />
              <div>
                You'll get 5 songs by that artist that we think you'll like
                best.
              </div>
            </div>
          </div>

          <div className="pt-10 text-center">Happy discovering!</div>
        </div>
        <button
          className="bg-slate-700 w-40 text-white mt-6 sm:mt-10 rounded-full py-2 text-sm hover:bg-gradient-to-r from-emerald-500 to-teal-500 hover:text-black"
          onClick={() => {
            navigate("/search");
          }}
        >
          Let's go
        </button>
      </div>
    </div>
  );
};

export default AboutModal;
