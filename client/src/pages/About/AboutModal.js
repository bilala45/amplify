import AboutProgressButton from "./AboutProgressButton";
import AboutInstructions from "./AboutInstructions";

const AboutModal = () => (
  <div className="bg-gradient-to-r from-cyan-800 to-sky-800 rounded-2xl mb-24 px-6 md:px-14 py-6 sm:py-8 sm:mt-12 text-center mx-auto max-w-screen-md text-white">
    <h1 className="text-2xl sm:text-3xl font-semibold">Welcome!</h1>
    <div className="text-md sm:text-lg text-left">
      <div className="pt-6 sm:pt-6 text-center">
        Let's make sure we're all on the same page.
      </div>
      <AboutInstructions />
    </div>
    <AboutProgressButton />
  </div>
);

export default AboutModal;

// bg-[#161a1d]
