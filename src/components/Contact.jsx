import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-800">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Speak With Our Team
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Whether you need legal advice or wish to discuss your
            matter with one of our attorneys, our team is here to
            assist you.
          </p>

          <div className="mt-10 space-y-8">

            <div className="flex gap-4">

              <div className="rounded-xl bg-blue-100 p-4">
                <FaPhoneAlt className="text-blue-900" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Telephone
                </h3>

                <p className="text-slate-600">
                  (011) XXX XXXX
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="rounded-xl bg-blue-100 p-4">
                <FaEnvelope className="text-blue-900" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-slate-600">
                  info@mosslaw.co.za
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <div className="rounded-xl bg-blue-100 p-4">
                <FaMapMarkerAlt className="text-blue-900" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Johannesburg
                </h3>

                <p className="text-slate-600">
                  Gauteng, South Africa
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <form className="rounded-3xl bg-slate-50 p-8 shadow-lg">

          <input
            type="text"
            placeholder="Full Name"
            className="mb-5 w-full rounded-xl border p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="mb-5 w-full rounded-xl border p-4"
          />

          <textarea
            rows="6"
            placeholder="How can we help you?"
            className="mb-5 w-full rounded-xl border p-4"
          />

          <button
            className="w-full rounded-xl bg-blue-900 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Send Enquiry
          </button>

        </form>

      </div>
    </section>
  );
}