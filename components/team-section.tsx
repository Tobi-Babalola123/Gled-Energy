import Image from "next/image";

const team = [
  {
    name: "Victoria Edeha-Anthony",
    role: "Executive Director ",
    image: "/victoria.png",
  },
  {
    name: "Our Engineers",
    role: "Service Center Mechanic",
    image: "/engineers.png",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-lime-600 font-semibold uppercase tracking-widest">
            Meet Our Team
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
            The People Powering Clean Energy
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Behind every successful solar installation is a dedicated team of
            professionals committed to delivering reliable, sustainable energy
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-[500px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-lime-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
