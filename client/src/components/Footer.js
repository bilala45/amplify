const Footer = () => (
  // flexbox with items pushed to the left and padding on left
  // Set height of entire footer
  <footer className="flex items-center px-14 h-10 bg-zinc-400">
    {/* credits */}
    <div>
      A project by{" "}
      <a
        className="underline underline-offset-2 hover:decoration-2 hover:text-white"
        href="https://github.com/bilala45"
      >
        Bilal Ali
      </a>
    </div>
  </footer>
);

export default Footer;
