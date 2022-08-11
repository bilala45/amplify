import AboutProgressButton from "./AboutProgressButton";
import AboutInstructions from "./AboutInstructions";

const AboutModal = () => {
  return (
    <div className="bg-slate-200 rounded-md mb-24 px-6 md:px-14 py-10 text-center max-w-screen-md shadow-2xl shadow-slate-700">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Welcome to amplify!
      </h1>
      <div className="text-md sm:text-lg text-left">
        <div className="pt-6 sm:pt-6 text-center">
          Let's make sure we're all on the same page.
        </div>
        <AboutInstructions />
        <div className="pt-10 text-center">Happy discovering!</div>
      </div>
      <AboutProgressButton />
    </div>
  );
};

export default AboutModal;
