import {
  FaCarCrash,
  FaHospital,
  FaUserInjured,
} from "react-icons/fa";

const practiceAreas = [
  {
    icon: <FaCarCrash />,
    title: "Road Accident Fund Claims",
    description:
      "Experienced legal representation to help clients pursue compensation following road accidents.",
  },
  {
    icon: <FaHospital />,
    title: "Medical Negligence",
    description:
      "Professional legal guidance for individuals affected by medical malpractice and negligence.",
  },
  {
    icon: <FaUserInjured />,
    title: "Personal Injury",
    description:
      "Dedicated support for injury claims with a client-first approach and trusted legal advice.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-800">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Practice Areas
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide trusted legal representation across a range of
            practice areas, helping clients navigate complex legal
            matters with confidence and professionalism.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-800 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-3xl text-blue-900">
                {area.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {area.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {area.description}
              </p>

              <button className="mt-8 font-semibold text-blue-900 transition group-hover:translate-x-1">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}