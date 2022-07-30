import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage";

const App = () => (
  // set background color with div surrounding all content
  // need h-screen so that div is the height of the entire screen (not just the height of the content inside it)
  <div>
    <div className="h-screen bg-gradient-to-r from-emerald-500 to-teal-500">
      <LoginPage />
    </div>
    <div className="h-screen bg-gradient-to-r from-emerald-500 to-teal-500">
      <SearchPage />
    </div>
    <div className="h-screen bg-gradient-to-r from-emerald-500 to-teal-500">
      <ResultsPage />
    </div>
  </div>
);

export default App;
