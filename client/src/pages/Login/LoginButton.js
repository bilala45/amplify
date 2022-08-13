import { BsSpotify } from "react-icons/bs";

const LoginButton = () => (
  <div className="flex justify-center lg:justify-start">
    <a
      className="flex items-center rounded-full py-2 pr-5 pl-4 text-black sm:text-lg font-medium bg-white hover:bg-cyan-900 hover:text-white"
      href="http://localhost:3001/api/login"
    >
      <BsSpotify className="mr-3 text-2xl" />
      Log in with Spotify
    </a>
  </div>
);

export default LoginButton;
