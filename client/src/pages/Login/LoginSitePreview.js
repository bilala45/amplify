import ExampleWebpage from "../../assets/imgs/Example-webpage.png";
import ExamplePhone from "../../assets/imgs/Example-phone.png";

const LoginSitePreview = () => (
  <div>
    <img
      className="rounded-lg hidden sm:block"
      src={ExampleWebpage}
      alt="Amplify website demo"
    ></img>
    <img
      className="rounded-lg sm:hidden w-fit w-xs max-w-xs text-center"
      src={ExamplePhone}
      alt="Amplify website demo"
    ></img>
  </div>
);

export default LoginSitePreview;
