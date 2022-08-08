import ExampleWebpage from "../assets/Example-webpage.png";

const LoginPage = () => {
  return (
    //split content into 3 columns using grid
    <div className="lg:grid grid-cols-3 gap-6 mb-20">
      {/* Tagline, login button, and about info spans 1 of 3 grid columns
          Place all items inside one div tag (this is where we specify 1 column) */}
      <div className="col-span-1 self-center text-left mb-16 lg:mb-0">
        {/* tagline */}
        <div className="pb-8 sm:pb-12 lg:pr-10 text-center lg:text-left text-3xl sm:text-4xl font-semibold">
          Spend your time listening to an artist's music, not looking through
          it.
        </div>
        <div className="flex justify-center lg:justify-start sm:text-lg font-medium">
          <a
            className="rounded-xl py-2 px-7 bg-slate-200 hover:bg-black hover:text-slate-100"
            href="http://localhost:3001/api/login"
          >
            Log in with Spotify
          </a>
        </div>
      </div>

      {/* site preview spans 2 of 3 grid columns */}
      <div className="col-span-2">
        <img
          className="rounded-lg shadow-2xl shadow-slate-700"
          src={ExampleWebpage}
          alt="Amplify website demo"
        ></img>
      </div>
    </div>
  );
};

export default LoginPage;
