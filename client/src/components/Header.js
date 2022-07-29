import SpotifyLogo from "./Spotify_Logo_RGB_Black.png";

const Header = () => (
  // Name and logo positioned at each end of the flexbox
  // Flexbox container has max screen width
  // Items are vertically aligned to the center
  // margin applied to entire container
  // ! should max screen width be handled at the LoginPage component (root of this component)?
  <div className="flex max-w-screen-sm justify-between items-center m-4">
    <div className="text-4xl">Spotify App</div>
    <img className="max-h-14" src={SpotifyLogo} alt="Spotify logo"></img>
  </div>
);

export default Header;
