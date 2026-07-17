import Image from "next/image";
import { FaCarCrash, FaHospital, FaUserShield } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-2xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Johannesburg Attorneys
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight text-slate-900 md:text-6xl xl:text-7xl">
            Trusted Legal
            <span className="block text-blue-950">
              Representation
            </span>
            <span className="block">
              When It Matters Most.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Moss & Associates provides experienced legal representation in
            Road Accident Fund claims, Medical Negligence and Personal Injury
            matters. We are committed to protecting your rights with integrity,
            professionalism and compassionate legal guidance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-600"
            >
              Book Consultation
            </a>

            <a
              href="#practice"
              className="rounded-xl border-2 border-blue-950 px-8 py-4 font-semibold text-blue-950 transition duration-300 hover:bg-blue-950 hover:text-white"
            >
              Explore Services
            </a>

          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-slate-700">

            <div className="flex items-center gap-2">
              <span className="text-amber-500">✔</span>
              Client Focused
            </div>

            <div className="flex items-center gap-2">
              <span className="text-amber-500">✔</span>
              Professional Advice
            </div>

            <div className="flex items-center gap-2">
              <span className="text-amber-500">✔</span>
              Trusted Representation
            </div>

          </div>

          {/* Service Cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <FaCarCrash className="mb-4 text-3xl text-amber-500" />

              <h3 className="mb-2 text-lg font-semibold text-blue-950">
                RAF Claims
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                Expert legal assistance for Road Accident Fund compensation.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <FaHospital className="mb-4 text-3xl text-amber-500" />

              <h3 className="mb-2 text-lg font-semibold text-blue-950">
                Medical Negligence
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                Protecting clients affected by medical malpractice.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <FaUserShield className="mb-4 text-3xl text-amber-500" />

              <h3 className="mb-2 text-lg font-semibold text-blue-950">
                Personal Injury
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                Dedicated legal support when you need it most.
              </p>

            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-xl">

          {/* Decorative Accent */}
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl"></div>

          <Image
            src="/images/hero-image.jpg"
            alt="Professional legal consultation"
            width={650}
            height={750}
            priority
            className="rounded-[32px] object-cover shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-6 shadow-2xl">

            <p className="text-4xl font-bold text-blue-950">
              10+
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Years of Trusted Legal Experience
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}