export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row">

        <div>

          <h3 className="text-2xl font-bold">
            Moss & Associates
          </h3>

          <p className="mt-2 text-slate-400">
            Trusted Legal Representation In Johannesburg.
          </p>

        </div>

        <div className="flex gap-8">

          <a href="#home" className="hover:text-blue-400">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400">
            About
          </a>

          <a href="#practice-areas" className="hover:text-blue-400">
            Services
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>

        </div>

      </div>

      <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

        © {new Date().getFullYear()} Moss & Associates. Website redesign created as a student project using Next.js and Tailwind CSS.

      </div>

    </footer>
  );
}