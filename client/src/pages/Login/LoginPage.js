import Header from "../../components/Header";
import LoginTagline from "./LoginTagline";
import LoginButton from "./LoginButton";
import LoginSitePreview from "./LoginSitePreview";
import Footer from "../../components/Footer";

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-tl from-neutral-700 to-black px-8 sm:px-14 flex flex-col min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid grid-cols-3 gap-6 pb-20 pt-8">
          <div className="col-span-1 self-center mb-16 lg:mb-0">
            <LoginTagline />
            <LoginButton />
          </div>
          <div className="col-span-2 flex justify-center">
            <LoginSitePreview />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

// bg-gradient-to-tl from-cyan-400 to-black
