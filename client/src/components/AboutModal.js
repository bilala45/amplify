import { useNavigate } from "react-router-dom";

const AboutModal = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>About Page</div>
      <button
        onClick={() => {
          navigate("/search");
        }}
      >
        To Search
      </button>
    </div>
  );
};

export default AboutModal;
