import SpotifyLogo from "../assets/Spotify_Logo_RGB_Black.png";

const Header = () => (
  // flexbox with items spaced between and padding on left and right
  // Set height of entire header
  <header className="flex justify-between items-center px-14 h-20 bg-zinc-400 ">
    {/* title */}
    <h1 className="text-3xl text-white font-semibold tracking-widest">
      AMPLIFY
    </h1>
    {/* spotify logo */}
    <img className="h-10" src={SpotifyLogo} alt="Spotify logo"></img>
  </header>
);

export default Header;
