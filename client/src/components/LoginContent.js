import ExampleWebpage from "../assets/Example-webpage.png";

const LoginContent = () => {
  return (
    //split content into 3 columns using grid
    <div className="grid grid-cols-3 h-full gap-6">
      {/* Tagline, login button, and about info spans 1 of 3 grid columns
          Place all items inside one div tag (this is where we specify 1 column) */}
      <div className="col-span-1 px-6 self-center text-left">
        {/* tagline */}
        <div className="pb-12 text-3xl font-semibold">
          A recommendation engine that helps you explore an artist's music, with
          a personal touch.
        </div>

        <a
          className="text-black bg-slate-200 text-lg font-medium rounded-xl py-2 px-7 hover:bg-black hover:text-slate-100"
          href="http://localhost:3001/api/login"
        >
          Log in with Spotify
        </a>
      </div>

      {/* site preview spans 2 of 3 grid columns */}
      <div className="col-span-2 self-center pr-6">
        <img
          className="rounded-lg max-w-full shadow-2xl shadow-slate-700"
          src={ExampleWebpage}
          alt="Example webpage"
        ></img>
      </div>
    </div>
  );
};

export default LoginContent;
