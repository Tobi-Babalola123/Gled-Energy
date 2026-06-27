"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineLightBulb,
  HiOutlineBattery100,
  HiOutlineWrenchScrewdriver,
  HiOutlineCog6Tooth,
  HiOutlineArrowRight,
} from "react-icons/hi2";
const services = [
  {
    title: "Residential Solar",
    description:
      "Custom solar systems designed for homes to reduce electricity costs and provide reliable backup power.",
    icon: HiOutlineHome,
  },
  {
    title: "Commercial Solar",
    description:
      "High-capacity solar solutions that help businesses lower operating costs and maximize long-term ROI.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Solar Street Lighting",
    description:
      "Smart solar-powered lighting solutions for estates, roads, schools and public infrastructure.",
    icon: HiOutlineLightBulb,
  },
  {
    title: "Lithium Battery Systems",
    description:
      "Premium lithium battery storage delivering uninterrupted power day and night.",
    icon: HiOutlineBattery100,
  },
  {
    title: "Solar Inverter Installation",
    description:
      "Professional inverter installation for seamless and efficient solar energy conversion.",
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    title: "Maintenance & Repairs",
    description:
      "Routine maintenance and expert repairs to keep your solar investment performing at its best.",
    icon: HiOutlineCog6Tooth,
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 100);
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
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-secondary">
            Our Services
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Complete Solar Energy Solutions
          </h2>

          <p className="text-lg leading-8 text-muted-foreground md:text-xl">
            From residential installations to commercial power systems, we
            deliver end-to-end renewable energy solutions tailored to your
            needs.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all duration-500 ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } ${
                hoveredIndex === index
                  ? "-translate-y-3 border-primary/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  : "shadow-sm"
              }`}
            >
              {/* Decorative Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary">
                <service.icon size={30} />
              </div>

              {/* Title */}
              <h3 className="relative mb-4 text-2xl font-bold text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative mb-8 leading-7 text-muted-foreground">
                {service.description}
              </p>

              {/* CTA */}
              <button className="relative inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
                Learn More
                <HiOutlineArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              {/* Accent Line */}
              <div className="relative mt-8 h-1 w-14 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
