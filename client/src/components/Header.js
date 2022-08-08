import SpotifyLogo from "../assets/Spotify_Logo_RGB_Black.png";

const Header = () => (
  // flexbox with items spaced between and padding on left and right
  <header className="flex justify-between pt-6 sm:pt-10 pb-12 sm:pb-20">
    <h1 className="text-2xl sm:text-4xl font-semibold">amplify</h1>
    <img className="h-8 sm:h-12" src={SpotifyLogo} alt="Spotify logo"></img>
  </header>
);

export default Header;
