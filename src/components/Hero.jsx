import Image from "next/image";
import { FaCarCrash, FaHospital, FaUserInjured } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-20 px-6 py-16 lg:flex-row lg:justify-between">

        {/* Left Content */}
        <div className="max-w-xl">

          {/* Small Heading */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-blue-800"></div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-800">
              Johannesburg Attorneys
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Trusted Legal
            <span className="block text-blue-900">
              Representation
            </span>
            <span className="block">
              When It Matters Most.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moss & Associates provides trusted legal representation in
            Road Accident Fund claims, Medical Negligence and Personal
            Injury matters. We are committed to protecting your rights
            with professionalism, integrity and client-focused service.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800"
            >
              Book a Consultation
            </a>

            <a
              href="#practice-areas"
              className="rounded-xl border-2 border-blue-900 px-8 py-4 font-semibold text-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:text-white"
            >
              Practice Areas
            </a>

          </div>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-700">
            <span>✓ Trusted Advice</span>
            <span>✓ Client-Focused</span>
            <span>✓ Professional Representation</span>
          </div>

          {/* Service Cards */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <FaCarCrash className="mb-4 text-3xl text-blue-800" />

              <h3 className="font-semibold text-slate-900">
                Road Accident Fund
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Dedicated legal representation for RAF claims and
                compensation.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <FaHospital className="mb-4 text-3xl text-blue-800" />

              <h3 className="font-semibold text-slate-900">
                Medical Negligence
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Protecting clients affected by medical malpractice.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <FaUserInjured className="mb-4 text-3xl text-blue-800" />

              <h3 className="font-semibold text-slate-900">
                Personal Injury
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Professional legal support when you need it most.
              </p>

            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%]">

          <Image
            src="/images/hero-image.jpg"
            alt="Professional legal consultation"
            width={600}
            height={700}
            priority
            className="h-[580px] w-full rounded-[32px] object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
          />

        </div>

      </div>
    </section>
  );
}