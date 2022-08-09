import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// page components
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";

const App = () => (
  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 sm:px-14 min-h-screen">
    <Header />
    <div className="max-w-screen-xl mx-auto">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  </div>
);

export default App;
