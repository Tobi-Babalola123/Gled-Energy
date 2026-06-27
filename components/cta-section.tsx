"use client";

import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-secondary to-dark-green py-20 md:py-32">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
          Ready to Switch to Solar?
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
          Speak with our experts today and receive a free consultation tailored
          to your energy needs. No obligations. No pressure. Just expert advice.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-10 py-4 text-lg font-bold text-secondary shadow-xl transition-all hover:scale-105 hover:bg-primary/90">
            Request Free Quote
            <FaArrowRight />
          </button>

          <button className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
            <FaPhoneAlt />
            Call Us Today
          </button>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <FaPhoneAlt className="text-xl text-primary" />
              </div>
            </div>

            <p className="mb-2 text-sm uppercase tracking-widest text-white/70">
              Phone
            </p>

            <p className="text-xl font-bold text-white md:text-2xl">
              +2348105333852
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <FaEnvelope className="text-xl text-primary" />
              </div>
            </div>

            <p className="mb-2 text-sm uppercase tracking-widest text-white/70">
              Email
            </p>

            <p className="text-xl font-bold text-white md:text-2xl">
              info@gledenergy.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
