import {
  FaCarCrash,
  FaHospital,
  FaUserShield,
  FaBalanceScale,
  FaFileContract,
  FaGavel,
} from "react-icons/fa";

const practiceAreas = [
  {
    icon: <FaCarCrash />,
    title: "Road Accident Fund",
    description:
      "Helping clients pursue fair compensation through Road Accident Fund claims.",
  },
  {
    icon: <FaHospital />,
    title: "Medical Negligence",
    description:
      "Professional legal representation for victims of medical malpractice.",
  },
  {
    icon: <FaUserShield />,
    title: "Personal Injury",
    description:
      "Protecting your rights and ensuring you receive the compensation you deserve.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Civil Litigation",
    description:
      "Strategic legal representation in civil disputes and litigation matters.",
  },
  {
    icon: <FaFileContract />,
    title: "Legal Consultation",
    description:
      "Practical legal advice to help you understand your rights and options.",
  },
  {
    icon: <FaGavel />,
    title: "Dispute Resolution",
    description:
      "Working towards efficient and fair resolutions while protecting your interests.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Practice Areas
          </p>

          <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">
            Legal Services You
            <span className="block text-blue-950">
              Can Depend On
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide trusted legal representation across a range of
            practice areas with professionalism, integrity and a strong
            commitment to achieving the best possible outcome for our clients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-amber-400 hover:shadow-2xl"
            >

              <div className="mb-6 inline-flex rounded-2xl bg-blue-950 p-4 text-3xl text-amber-400 transition group-hover:scale-110">
                {area.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-blue-950">
                {area.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {area.description}
              </p>

              <button className="mt-8 font-semibold text-amber-500 transition hover:translate-x-2">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}