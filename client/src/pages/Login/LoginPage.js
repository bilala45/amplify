import LoginHeader from "./LoginHeader";
import LoginTagline from "./LoginTagline";
import LoginButton from "./LoginButton";
import LoginSitePreview from "./LoginSitePreview";

const LoginPage = () => (
  <div className="bg-zinc-900 px-8 sm:px-14 min-h-screen">
    <LoginHeader />
    <div className="max-w-screen-xl mx-auto">
      <div className="lg:grid grid-cols-3 gap-6 pb-20">
        <div className="col-span-1 self-center text-left mb-16 lg:mb-0">
          <LoginTagline />
          <LoginButton />
        </div>
        <div className="col-span-2 flex justify-center">
          <LoginSitePreview />
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
