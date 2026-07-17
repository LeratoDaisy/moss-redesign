import {
  FaBalanceScale,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaBalanceScale />,
    title: "Professional Representation",
    description:
      "Legal advice and representation delivered with professionalism and care.",
  },
  {
    icon: <FaHandshake />,
    title: "Client-Focused Service",
    description:
      "Every matter is approached with personal attention and clear communication.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity & Trust",
    description:
      "Committed to ethical legal practice and protecting our clients' interests.",
  },
  {
    icon: <FaUsers />,
    title: "Personal Legal Support",
    description:
      "Building lasting relationships through dependable legal guidance.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Why Clients Trust Us
          </p>

          <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">
            Committed To Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Moss & Associates, we believe that exceptional legal service is
            built on trust, integrity and a genuine commitment to every client.
          </p>

        </div>

        {/* Feature Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-slate-50 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-950 text-3xl text-amber-400">
                {item.icon}
              </div>

              <h3 className="mb-4 text-xl font-semibold text-blue-950">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-950 to-blue-900 px-10 py-14 text-center text-white shadow-2xl">

          <h3 className="font-serif text-4xl font-bold">
            Your Trusted Legal Partner
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're pursuing a Road Accident Fund claim, seeking advice
            on medical negligence, or navigating a personal injury matter, our
            team is committed to providing trusted legal guidance every step of
            the way.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-amber-600"
          >
            Schedule a Consultation
          </a>

        </div>

      </div>
    </section>
  );
}