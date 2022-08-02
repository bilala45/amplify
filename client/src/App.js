import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// page components
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage";

const App = () => (
  <div className="bg-gradient-to-r from-emerald-500 to-teal-500">
    <div className="h-screen max-w-screen-xl mx-auto px-14">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

export default App;
