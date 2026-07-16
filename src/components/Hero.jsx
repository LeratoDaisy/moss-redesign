import Image from "next/image";
import heroImage from "../assets/images/hero-image.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-50"
    >
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
            Johannesburg Attorneys
          </p>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Experienced Legal Representation You Can Trust
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moss & Associates provides trusted legal representation
            in Road Accident Fund claims, medical negligence,
            and personal injury matters. We are committed to
            protecting your rights with professionalism,
            integrity, and dedicated client service.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-lg bg-yellow-600 px-7 py-4 font-semibold text-white transition hover:bg-yellow-700">
              Request a Consultation
            </button>

            <button className="rounded-lg border border-slate-900 px-7 py-4 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white">
              Explore Services
            </button>

          </div>

        </div>

        {/* Right Image */}

        <div className="w-full max-w-lg">

          <Image
            src={heroImage}
            alt="Professional legal consultation"
            className="rounded-3xl shadow-2xl"
            priority
          />

        </div>

      </div>
    </section>
  );
}