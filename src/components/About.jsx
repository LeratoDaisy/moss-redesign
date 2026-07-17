import Image from "next/image";
import {
  FaBalanceScale,
  FaHandshake,
  FaUserShield,
  FaAward,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <div className="relative">

          <Image
            src="/images/about-image.jpg"
            alt="Moss & Associates"
            width={650}
            height={750}
            className="rounded-[32px] object-cover shadow-2xl"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-8 right-6 rounded-3xl bg-blue-950 px-8 py-6 text-white shadow-2xl">

            <h3 className="text-4xl font-bold text-amber-400">
              Trusted
            </h3>

            <p className="mt-2 text-sm">
              Professional Legal Representation
            </p>

          </div>

        </div>

        {/* Right Content */}

        <div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            About Us
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Legal Representation Built On
            <span className="block text-blue-950">
              Trust & Integrity
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Moss & Associates is committed to providing trusted legal
            representation with professionalism, integrity and personal
            attention. We understand that every legal matter is unique,
            which is why we take time to understand each client's needs
            before developing the best legal strategy.
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-blue-950 p-4 text-amber-400">
                <FaBalanceScale />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Professional Advice
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Clear legal guidance tailored to every client.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-blue-950 p-4 text-amber-400">
                <FaHandshake />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Client Focused
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Building lasting relationships through trust.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-blue-950 p-4 text-amber-400">
                <FaUserShield />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Integrity
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Honest representation with your interests first.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-blue-950 p-4 text-amber-400">
                <FaAward />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Trusted Service
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Committed to achieving the best possible outcomes.
                </p>
              </div>

            </div>

          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="mt-12 inline-block rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-amber-600"
          >
            Speak With Our Team
          </a>

        </div>

      </div>
    </section>
  );
}