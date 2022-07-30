import Header from "./Header";
import LoginContent from "./LoginContent";
import Footer from "./Footer";

const LoginPage = () => (
  // might not need this component, everything could potentially go right into App component
  <div className="h-full max-w-screen-xl mx-auto px-14">
    <Header />
    <LoginContent />
    <Footer />
  </div>
);

export default LoginPage;
