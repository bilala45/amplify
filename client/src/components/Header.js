import SpotifyLogo from "../assets/imgs/Spotify_Logo_RGB_Black.png";

// NOTE: This header is used for all pages EXCEPT the login page

const Header = () => (
  // flexbox with items spaced between and padding on left and right
  <header className="flex pt-6 sm:pt-10 pb-12 text-white">
    <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
      amplify
    </h1>
    {/* <img className="h-8 sm:h-12" src={SpotifyLogo} alt="Spotify logo"></img> */}
  </header>
);

export default Header;
