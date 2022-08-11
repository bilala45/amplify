import AboutProgressButton from "./AboutProgressButton";
import AboutInstructions from "./AboutInstructions";

const AboutModal = () => (
  <div className="bg-[#161a1d] rounded-xl mb-24 px-6 md:px-14 py-10 text-center mx-auto max-w-screen-md shadow-2xl shadow-slate-700 text-white">
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
