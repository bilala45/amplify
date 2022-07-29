import SpotifyLogo from "./Spotify_Logo_RGB_Black.png";

const Header = () => (
  // Name and logo positioned at each end of the flexbox
  // Flexbox container has max screen width
  // Items are vertically aligned to the center
  // margin applied to entire container
  // ! should max screen width be handled at the LoginPage component (root of this component)?
  <div className="flex justify-between items-center mx-14 my-6">
    <div className="text-3xl">Amplify</div>
    <img className="max-h-12" src={SpotifyLogo} alt="Spotify logo"></img>
  </div>
);

export default Header;
