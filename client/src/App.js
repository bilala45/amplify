import { Routes, Route } from "react-router-dom";

// page components
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";

const App = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/search" element={<SearchPage />} />
  </Routes>
);

export default App;
