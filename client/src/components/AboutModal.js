import { useNavigate } from "react-router-dom";

const AboutModal = () => {
  // router hook to navigate to different react page
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-slate-200 rounded-xl px-14 pt-10 text-center max-w-screen-md">
        <h1 className="text-3xl font-semibold text-teal-600">
          Welcome to discover!
        </h1>
        <div className="text-lg pt-4 text-left">
          Here's a quick primer to make sure we're all on the same page.
        </div>
        <div className="text-lg pt-2 text-left">
          Discover uses your listening history to generate artist-specific
          recommendations. To get started, use the search bar to look up an
          artist. Discover will look through the artist's discography and return
          the songs we think you'll like best.
        </div>
        <div className="text-lg pt-4 pb-6 text-center">Happy discovering!</div>
        <button
          className="bg-slate-700 w-40 text-white rounded-full py-2 mb-8 text-sm hover:bg-gradient-to-r from-emerald-500 to-teal-500 hover:text-black"
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
