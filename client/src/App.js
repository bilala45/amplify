import { Routes, Route, Navigate } from "react-router-dom";

// page components
import LoginPage from "./pages/Login/LoginPage";
import AboutPage from "./pages/About/AboutPage";
import SearchPage from "./pages/Search/SearchPage";
import Protected from "./components/Protected";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/about"
        element={
          <Protected>
            <AboutPage />
          </Protected>
        }
      />
      <Route
        path="/search"
        element={
          <Protected>
            <SearchPage />
          </Protected>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
