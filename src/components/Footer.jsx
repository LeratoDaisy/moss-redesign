import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">

        {/* Logo */}

        <div>

          <h2 className="font-serif text-3xl font-bold">
            Moss & Associates
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Trusted legal representation with professionalism,
            integrity and a commitment to protecting your rights.
          </p>

        </div>

        {/* Navigation */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Navigation
          </h3>

          <ul className="space-y-3 text-slate-300">

            <li><a href="#home" className="hover:text-amber-400">Home</a></li>
            <li><a href="#about" className="hover:text-amber-400">About</a></li>
            <li><a href="#practice" className="hover:text-amber-400">Practice Areas</a></li>
            <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>

          </ul>

        </div>

        {/* Practice Areas */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Services
          </h3>

          <ul className="space-y-3 text-slate-300">

            <li>Road Accident Fund</li>
            <li>Medical Negligence</li>
            <li>Personal Injury</li>
            <li>Legal Consultation</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Connect
          </h3>

          <div className="space-y-4 text-slate-300">

            <p>Johannesburg, South Africa</p>

            <p>info@mosslaw.co.za</p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-amber-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-amber-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:info@mosslaw.co.za"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-amber-500"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-blue-900 py-6 text-center text-sm text-slate-400">

        © {new Date().getFullYear()} Moss & Associates Attorneys. All Rights Reserved.

      </div>

    </footer>
  );
}