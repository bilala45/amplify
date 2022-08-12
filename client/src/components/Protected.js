import { isUserAuth } from "../utils/spotify.js";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  if (!isUserAuth()) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default Protected;
