import ExampleWebpage from "../assets/Example-webpage.png";

const LoginContent = () => (
  // entire content block is the width of the screen
  // ! need to figure out height
  <div className="pt-20 -mt-20 h-screen pb-12 -mb-12">
    {/* split content into 3 columns using grid */}
    <div className="grid grid-cols-3 h-full gap-6">
      {/* Tagline, login button, and about info spans 1 of 3 grid columns
          Place all items inside one div tag (this is where we specify 1 column) */}
      <div className="col-span-1 px-6 self-center text-left">
        {/* tagline */}
        <div className="pb-14 text-3xl font-semibold">
          A recommendation engine that helps you explore new artists,<br></br>{" "}
          with a personal touch.
        </div>

        {/* login button and about info (encompassed in one block) */}
        <div className="text-left">
          {/* spotify login button */}
          <button className="w-52 font-medium text-lg border-0 rounded-xl py-2 mb-4 text-black bg-slate-200 hover:bg-black hover:text-slate-100">
            Login with Spotify
          </button>

          <div className="w-52">
            {/* about info */}
            <div className="text-sm text-center underline underline-offset-2 hover:decoration-2 hover:text-slate-100 hover:cursor-pointer">
              Why do I need to login?
            </div>
          </div>
        </div>
      </div>

      {/* site preview spans 2 of 3 grid columns */}
      <div className="col-span-2 self-center pl-6">
        <img
          className="rounded-lg max-w-full shadow-2xl shadow-slate-700"
          src={ExampleWebpage}
        ></img>
      </div>
    </div>
  </div>
);
export default LoginContent;
