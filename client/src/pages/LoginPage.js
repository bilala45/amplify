import ExampleWebpage from "../assets/Example-webpage.png";
import SpotifyLogo from "../assets/Spotify_Logo_RGB_Green.png";

const LoginPage = () => {
  return (
    <div className="bg-zinc-900 px-8 sm:px-14 min-h-screen">
      {/* header */}
      <header className="flex justify-between pt-6 sm:pt-10 pb-12 sm:pb-20">
        <h1 className="text-2xl sm:text-4xl font-semibold text-white">
          amplify
        </h1>
        <img className="h-8 sm:h-12" src={SpotifyLogo} alt="Spotify logo"></img>
      </header>
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid grid-cols-3 gap-6 pb-20">
          {/* Tagline, login button, and about info spans 1 of 3 grid columns
          Place all items inside one div tag (this is where we specify 1 column) */}
          <div className="col-span-1 self-center text-left mb-16 lg:mb-0">
            {/* tagline */}
            <div className="text-white pb-8 sm:pb-12 lg:pr-10 text-center lg:text-left text-3xl sm:text-4xl font-semibold">
              Spend your time listening to an artist's music, not looking
              through it.
            </div>
            <div className="flex justify-center lg:justify-start sm:text-lg font-medium">
              <a
                className="rounded-xl py-2 px-7 bg-slate-200 hover:bg-emerald-500"
                href="http://localhost:3001/api/login"
              >
                Log in with Spotify
              </a>
            </div>
          </div>

          {/* site preview spans 2 of 3 grid columns */}
          <div className="col-span-2">
            <img
              className="rounded-lg"
              src={ExampleWebpage}
              alt="Amplify website demo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
