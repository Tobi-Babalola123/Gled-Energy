import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function InitiativeSection() {
  return (
    <section className="py-24 bg-lime-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-lime-600 font-semibold uppercase tracking-widest">
              Community Impact
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900 leading-tight">
              D'Young Energy Initiative
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              D'Young Energy is our community outreach initiative focused on
              educating school children and young people about climate change,
              environmental sustainability, and the importance of renewable
              energy.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Through hands-on workshops, awareness campaigns, and practical
              demonstrations, we inspire the next generation to embrace solar
              energy as a cleaner, healthier, and more sustainable source of
              power.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-4 rounded-full transition">
              Join Us
              <ArrowRight size={18} />
            </button>
          </div>

          <div>
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/dyoung.png"
                alt="Children learning renewable energy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
