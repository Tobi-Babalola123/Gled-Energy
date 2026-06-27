"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiOutlineBolt,
  HiOutlineBattery100,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import Image from "next/image";

const benefits = [
  {
    icon: HiOutlineCurrencyDollar,
    title: "Lower Electricity Bills",
    description:
      "Reduce monthly electricity costs with a solar energy system designed for long-term savings.",
  },
  {
    icon: HiOutlineBattery100,
    title: "Reliable Backup Power",
    description:
      "Stay powered during grid outages with premium lithium battery storage and inverter systems.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Eco-Friendly Energy",
    description:
      "Reduce your carbon footprint while powering your home or business with clean renewable energy.",
  },
  {
    icon: HiOutlineBolt,
    title: "Long-Term Savings",
    description:
      "Invest once and enjoy decades of reliable energy backed by industry-leading warranties.",
  },
];

const partners = [
  {
    name: "Jinko Solar",
    logo: "/partners/junko.jpeg",
  },
  {
    name: "MUST Power",
    logo: "/partners/Musst.png",
  },
  {
    name: "Haustrom",
    logo: "/partners/haustromm.png",
  },
  {
    name: "MSG",
    logo: "/partners/msgg.png",
  },
  {
    name: "Luminos",
    logo: "/partners/luminos.png",
  },
];

export function BenefitsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-secondary">
            Why Choose GLED Energy
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Trusted by Homes & Businesses Across Nigeria
          </h2>

          <p className="text-lg leading-8 text-muted-foreground md:text-xl">
            Join hundreds of satisfied homeowners and businesses enjoying
            reliable, affordable and sustainable solar energy solutions.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mb-24 border-b border-border pb-16">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex h-24 w-44 items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="h-10 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Decorative Glow */}
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

              {/* Icon */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary">
                <benefit.icon size={30} />
              </div>

              {/* Title */}
              <h3 className="relative mb-4 text-2xl font-bold text-foreground">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="relative text-base leading-7 text-muted-foreground">
                {benefit.description}
              </p>

              {/* Accent Line */}
              <div className="relative mt-8 h-1 w-14 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
