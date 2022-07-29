import Header from "./Header";
import LoginContent from "./LoginContent";
import Footer from "./Footer";

const LoginPage = () => (
  // add a grid with 2 columns (rows are implicitly created)
  // we won't actually use the two columns in the header and footer but they'll be there
  <div>
    <Header />
    <LoginContent />
    <Footer />
  </div>
);

export default LoginPage;
