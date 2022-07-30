import LoginPage from "./LoginPage";

const App = () => (
  // set background color with div surrounding all content
  // need h-screen so that div is the height of the entire screen (not just the height of the content inside it)
  <div className="h-screen bg-gradient-to-r from-blue-500 to-cyan-500">
    <LoginPage />
  </div>
);

export default App;
