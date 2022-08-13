import { useNavigate } from "react-router-dom";

const AboutProgressButton = () => {
  // router hook to navigate to different react page
  const navigate = useNavigate();

  return (
    <button
      className="bg-white w-40 text-black mt-8 sm:mt-10 font-semibold rounded-full py-2 text-sm hover:bg-cyan-300"
      onClick={() => {
        navigate("/search");
      }}
    >
      Let's go
    </button>
  );
};

export default AboutProgressButton;
