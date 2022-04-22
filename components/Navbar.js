import Link from "next/link";

const Navbar = () => {
  const NLink = ({ name, href }) => {
    return (
      <Link href={href}>
        <a rel="noreferrer">
          <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white hover:p-0 hover:text-stone-200 hover:shadow-slate-100/10 hover:shadow-xl">
            {name}
          </span>
        </a>
      </Link>
    );
  };
  return (
    <div className="absolute w-full z-10">
      <nav className="flex flex-wrap items-center justify-between py-1 px-3 mb-3">
        <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between undefined">
          <NLink href="/" name="Caja Popular Cristo Rey"></NLink>
          <div className="flex flex-wrap  invisible lg:visible items-center justify-center py-5 px-3 mb-3">
            <NLink href="/ahorro" name="Ahorro"></NLink>
            <NLink href="/credito" name="Prestamo"></NLink>
            <NLink href="/inversion" name="Inversiones"></NLink>
            <NLink href="//#servicios" name="Servicios"></NLink>
            <NLink href="/" name="Sobre nosotros"></NLink>
            <NLink href="//#contacto" name="Contacto"></NLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
