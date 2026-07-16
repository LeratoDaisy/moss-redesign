export default function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:justify-between">

        {/* Left */}
        <div className="max-w-xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            JOHANNESBURG ATTORNEYS
          </p>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Experienced Legal Representation You Can Trust
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moss & Associates provides trusted legal representation in
            Road Accident Fund claims, Medical Negligence and Personal
            Injury matters with professionalism and integrity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
  <button className="rounded-xl bg-amber-600 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-amber-700">
    Request Consultation
  </button>

  <button className="rounded-xl border border-slate-900 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:text-white">
    Practice Areas
  </button>
</div>

<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="font-semibold text-slate-900">
      Road Accident Fund
    </h3>
    <p className="mt-2 text-sm text-slate-600">
      Dedicated representation for RAF claims and compensation.
    </p>
  </div>

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="font-semibold text-slate-900">
      Medical Negligence
    </h3>
    <p className="mt-2 text-sm text-slate-600">
      Protecting clients affected by medical malpractice.
    </p>
  </div>

  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="font-semibold text-slate-900">
      Personal Injury
    </h3>
    <p className="mt-2 text-sm text-slate-600">
      Professional legal support when you need it most.
    </p>
  </div>

</div>
        </div>

        {/* Right */}

        <div className="w-full lg:w-[45%]">
          <img
            src="/images/hero-image.jpg"
            alt="Legal consultation"
            className="h-[520px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}