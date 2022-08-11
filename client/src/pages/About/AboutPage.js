import { useEffect } from "react";
import { setUserCreds } from "../../utils/spotify.js";

// component imports
import Header from "../../components/Header";
import AboutModal from "./AboutModal.js";

const AboutPage = () => {
  // retrieve tokens from url params on initial render
  useEffect(() => {
    setUserCreds();
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 sm:px-14 min-h-screen">
      <Header />
      <AboutModal />
    </div>
  );
};

export default AboutPage;
