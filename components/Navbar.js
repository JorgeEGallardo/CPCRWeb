const Navbar = () => {
  return (
    <div className="absolute w-full z-10">
      <nav className="flex flex-wrap items-center justify-between py-5 px-3 mb-3">
        <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between undefined">
          <a
            href="https://material-tailwind.com?ref=mtk"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
              Caja Popular Cristo Rey
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
