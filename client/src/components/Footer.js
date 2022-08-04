const Footer = () => (
  // flexbox with items pushed to the left and padding on left
  // Set height of entire footer
  // <footer className="flex items-center justify-between h-12">
  //   {/* credits */}
  //   <div>
  //     Created by{" "}
  //     <a
  //       className="font-semibold hover:decoration-2 hover:text-slate-100"
  //       href="https://github.com/bilala45"
  //     >
  //       @bilala45
  //     </a>
  //     . Powered by{" "}
  //     <a
  //       className="font-semibold hover:decoration-2 hover:text-slate-100"
  //       href="https://spotify.com/"
  //     >
  //       @Spotify
  //     </a>
  //   </div>
  //   {/* copyright */}
  //   <div>Copyright © 2022, Bilal Ali. All rights reserved.</div>
  // </footer>

  <footer className="h-12">
    {/* credits */}
    <div>
      Created by{" "}
      <a
        className="font-semibold hover:decoration-2 hover:text-slate-100"
        href="https://github.com/bilala45"
      >
        @bilala45
      </a>
      . Powered by{" "}
      <a
        className="font-semibold hover:decoration-2 hover:text-slate-100"
        href="https://spotify.com/"
      >
        @Spotify
      </a>
      .
    </div>
  </footer>
);

export default Footer;
