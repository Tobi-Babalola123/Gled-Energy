"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiOutlineChartBar,
  HiOutlineBolt,
  HiOutlineFaceSmile,
  HiOutlineTrophy,
} from "react-icons/hi2";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Solar Installations",
    icon: HiOutlineChartBar,
  },
  {
    number: 10,
    suffix: "MW+",
    label: "Power Generated",
    icon: HiOutlineBolt,
  },
  {
    number: 95,
    suffix: "%",
    label: "Customer Satisfaction",
    icon: HiOutlineFaceSmile,
  },
  {
    number: 8,
    suffix: "+",
    label: "Years Experience",
    icon: HiOutlineTrophy,
  },
];

function StatCounter({
  target,
  suffix,
  label,
  icon: Icon,
  isVisible,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 60;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-60 transition-opacity group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary">
        <Icon size={30} />
      </div>

      {/* Counter */}
      <h3 className="relative mb-2 text-5xl font-bold text-white md:text-6xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </h3>

      {/* Label */}
      <p className="relative text-lg font-medium text-white/75">{label}</p>

      {/* Accent */}
      <div className="relative mx-auto mt-6 h-1 w-14 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />
    </div>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#243400] via-secondary to-[#111] py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Impact
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Proven Results That Speak for Themselves
          </h2>

          <p className="text-lg leading-8 text-white/70 md:text-xl">
            Every installation represents another family or business enjoying
            reliable, affordable and sustainable energy across Nigeria.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              target={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
