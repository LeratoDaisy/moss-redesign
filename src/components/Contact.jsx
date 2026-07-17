import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Contact Us
          </p>

          <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">
            Let's Discuss
            <span className="block text-blue-950">
              Your Legal Matter
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you need legal advice or wish to schedule a consultation,
            our team is ready to assist you.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Details */}

          <div>

            <div className="space-y-6">

              <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl text-amber-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +27 XX XXX XXXX
                  </p>
                </div>

              </div>

              <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl text-amber-400">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-2 text-slate-600">
                    info@mosslaw.co.za
                  </p>
                </div>

              </div>

              <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl text-amber-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Office
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Johannesburg, South Africa
                  </p>
                </div>

              </div>

              <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl text-amber-400">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Office Hours
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Monday - Friday<br />
                    08:00 - 17:00
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-[32px] bg-white p-10 shadow-2xl">

            <h3 className="mb-8 font-serif text-3xl font-bold text-blue-950">
              Request a Consultation
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-amber-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-amber-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-amber-500"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your legal matter..."
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-amber-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-amber-500 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}