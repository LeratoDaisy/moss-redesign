import {
  FaBalanceScale,
  FaUsers,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBalanceScale />,
    title: "Experienced Representation",
    description:
      "We provide knowledgeable legal guidance backed by professionalism and a commitment to achieving the best possible outcome for every client.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Focused Approach",
    description:
      "Every client receives personal attention, clear communication and legal strategies tailored to their unique circumstances.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity & Trust",
    description:
      "We build lasting relationships through honesty, transparency and ethical legal practice.",
  },
  {
    icon: <FaAward />,
    title: "Committed to Excellence",
    description:
      "Our goal is to deliver high-quality legal services while protecting your rights every step of the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="bg-blue-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Why Choose Us
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            Trusted Legal Guidance
            <span className="block text-amber-400">
              Every Step Of The Way
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Choosing the right legal team can make all the difference.
            At Moss & Associates, we combine professional expertise with
            genuine care for every client we represent.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-3xl border border-blue-800 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:bg-white/10"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-3xl text-white transition group-hover:rotate-6">
                {reason.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {reason.title}
              </h3>

              <p className="leading-7 text-slate-300">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-amber-500 to-amber-400 px-10 py-10 shadow-2xl">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <div>

              <h3 className="font-serif text-3xl font-bold text-slate-900">
                Need Trusted Legal Assistance?
              </h3>

              <p className="mt-3 max-w-2xl text-lg text-slate-800">
                Our team is ready to discuss your matter, answer your
                questions and help you understand your legal options.
              </p>

            </div>

            <a
              href="#contact"
              className="rounded-xl bg-blue-950 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-slate-900"
            >
              Schedule a Consultation
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}