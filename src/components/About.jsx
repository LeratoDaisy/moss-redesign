import Image from "next/image";
import { FaBalanceScale, FaHandshake, FaUserShield } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left Image */}

        <div className="w-full lg:w-1/2">

          <Image
            src="/images/about-image.jpg"
            alt="Legal professionals meeting with a client"
            width={600}
            height={700}
            className="h-[550px] w-full rounded-3xl object-cover shadow-xl"
          />

        </div>

        {/* Right Content */}

        <div className="w-full lg:w-1/2">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-800">
            About Us
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Dedicated To Protecting
            <span className="block text-blue-900">
              Your Rights
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moss & Associates is committed to providing professional,
            ethical and client-focused legal services. We understand
            that legal matters can be overwhelming, which is why we
            work closely with every client to deliver trusted advice
            and effective representation.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-100 p-3">
                <FaBalanceScale className="text-2xl text-blue-900" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Experienced Representation
                </h3>

                <p className="mt-1 text-slate-600">
                  Dedicated legal support with professionalism and integrity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-100 p-3">
                <FaHandshake className="text-2xl text-blue-900" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Client-Focused Service
                </h3>

                <p className="mt-1 text-slate-600">
                  Every case is handled with care, transparency and respect.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-100 p-3">
                <FaUserShield className="text-2xl text-blue-900" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Trusted Legal Advice
                </h3>

                <p className="mt-1 text-slate-600">
                  Helping individuals make informed legal decisions with confidence.
                </p>
              </div>
            </div>

          </div>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-800"
          >
            Speak To Our Team
          </a>

        </div>

      </div>
    </section>
  );
}