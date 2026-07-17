import {
  FaBalanceScale,
  FaUsers,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBalanceScale />,
    title: "Experienced Legal Representation",
    description:
      "Our team is committed to providing professional legal advice tailored to every client's unique circumstances.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centred Approach",
    description:
      "We believe every client deserves personal attention, honest communication and dedicated legal support.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity & Transparency",
    description:
      "We handle every matter with professionalism, ethics and complete transparency throughout the legal process.",
  },
  {
    icon: <FaHandshake />,
    title: "Committed To Justice",
    description:
      "Our focus is achieving fair outcomes while protecting the rights and interests of every client we represent.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Legal Support Built On
            <span className="block text-blue-400">
              Trust & Professionalism
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            At Moss & Associates, we combine legal expertise with
            personalised service to provide trusted representation
            when our clients need it most.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-blue-900 p-4 text-3xl text-blue-300">
                {reason.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {reason.title}
              </h3>

              <p className="leading-7 text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-slate-700 pt-12 text-center lg:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              100%
            </h3>
            <p className="mt-2 text-slate-300">
              Client Commitment
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              Ethical
            </h3>
            <p className="mt-2 text-slate-300">
              Legal Practice
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              Trusted
            </h3>
            <p className="mt-2 text-slate-300">
              Representation
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              Client
            </h3>
            <p className="mt-2 text-slate-300">
              Focused
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}