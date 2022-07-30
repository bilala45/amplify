const Footer = () => (
  // flexbox with items pushed to the left and padding on left
  // Set height of entire footer
  <footer className="flex items-center justify-between h-12">
    {/* credits */}
    <div>
      A project by{" "}
      <a
        className="underline underline-offset-2 hover:decoration-2 hover:text-slate-100"
        href="https://github.com/bilala45"
      >
        Bilal Ali
      </a>
      .
    </div>
    {/* copyright */}
    <div>Copyright © 2022, Bilal Ali. All rights reserved.</div>
  </footer>
);

export default Footer;
