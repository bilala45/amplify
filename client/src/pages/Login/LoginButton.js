const LoginButton = () => (
  <div className="flex justify-center lg:justify-start">
    <a
      className="rounded-xl py-2 px-7 bg-slate-200 hover:bg-emerald-500 sm:text-lg font-medium"
      href="http://localhost:3001/api/login"
    >
      Log in with Spotify
    </a>
  </div>
);

export default LoginButton;
