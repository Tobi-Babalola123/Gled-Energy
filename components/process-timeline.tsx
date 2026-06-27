"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Search,
  PencilRuler,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Free Consultation",
    duration: "30 mins",
    icon: MessageCircle,
    description:
      "Speak with our energy experts to understand your electricity usage, budget, and long-term energy goals.",
  },
  {
    number: 2,
    title: "Site Inspection",
    duration: "1 Day",
    icon: Search,
    description:
      "Our engineers visit your property to assess roof space, wiring, and installation requirements.",
  },
  {
    number: 3,
    title: "System Design",
    duration: "2–3 Days",
    icon: PencilRuler,
    description:
      "We engineer a custom solar solution with the right panels, batteries, and inverter for your needs.",
  },
  {
    number: 4,
    title: "Installation",
    duration: "1–3 Days",
    icon: Wrench,
    description:
      "Certified installers complete the installation, testing, and commissioning with minimal disruption.",
  },
  {
    number: 5,
    title: "Lifetime Support",
    duration: "Always",
    icon: ShieldCheck,
    description:
      "Enjoy ongoing monitoring, maintenance, warranty support, and expert assistance whenever you need it.",
  },
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!isVisible || !autoPlay) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isVisible, autoPlay]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Installation Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From consultation to long-term support, we guide you every step of
            the way
          </p>
        </div>

        {/* Desktop Timeline */}
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-1 flex-col items-center text-center"
              >
                {/* Circle */}
                <button
                  onClick={() => {
                    setAutoPlay(false);
                    setActiveStep(index);
                  }}
                  className={`relative z-20 flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full border-4 font-bold text-2xl transition-all duration-300 ${
                    index <= activeStep
                      ? "border-primary bg-primary text-secondary shadow-xl shadow-primary/30 scale-105"
                      : "border-border bg-white text-muted-foreground hover:border-primary hover:scale-105"
                  }`}
                >
                  {step.number}
                </button>

                {/* Title */}
                <h3
                  className={`mt-6 max-w-[160px] text-base lg:text-lg font-bold transition-colors ${
                    index <= activeStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-10 lg:top-12 z-10 flex w-full items-center"
                    style={{ transform: "translateX(48px)" }}
                  >
                    <div className="h-1 flex-1 rounded-full bg-border overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-primary transition-all duration-700 ${
                          index < activeStep ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10">
            <p className="text-center text-lg md:text-xl text-foreground leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full border-3 flex items-center justify-center font-bold text-xl transition-all ${
                    index <= activeStep
                      ? "bg-primary border-primary text-secondary"
                      : "bg-white border-border text-muted-foreground"
                  }`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-border my-2" />
                )}
              </div>

              {/* Content */}
              <div className="pt-1 flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg text-lg">
            Start Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
