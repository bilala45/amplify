import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import ResultsPage from "./pages/ResultsPage";

const App = () => (
  <div className="bg-gradient-to-r from-emerald-500 to-teal-500">
    <div className="h-screen max-w-screen-xl mx-auto px-14">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

export default App;
