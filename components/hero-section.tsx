"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden overflow-x-hidden pt-24 lg:pt-28"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-solar.png"
          alt="Solar panels aerial view"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <>
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div>
                <p className="text-primary font-semibold text-sm md:text-base mb-2 uppercase tracking-wide">
                  Clean Energy Solutions
                </p>
                <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Power Your Home with Solar Energy
                </h1>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
                Reduce electricity bills, eliminate generator dependence, and
                enjoy uninterrupted power with professionally installed solar
                energy systems built for Nigerian homes and businesses.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <span className="text-primary text-xl">★</span>
                  {/* <span className="font-semibold">500+ Installations</span> */}
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <span className="text-primary text-xl">★</span>
                  <span className="font-semibold">Certified Installers</span>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <span className="text-primary text-xl">★</span>
                  <span className="font-semibold">Nationwide Service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 pb-6">
                <button className="px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl text-base md:text-lg">
                  Get Free Solar Quote
                </button>
                <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-all border border-white/50 text-base md:text-lg">
                  Explore Our Projects
                </button>
              </div>
            </div>
          </div>

          {/* Right Floating Card */}
          <div
            className={`hidden lg:block transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Estimated Savings
              </h3>

              <div className="space-y-6">
                <div className="border-b border-border pb-4">
                  <p className="text-muted-foreground text-sm font-semibold mb-1">
                    Monthly Savings
                  </p>
                  <p className="text-3xl font-bold text-primary">₦45,000+</p>
                </div>

                <div className="border-b border-border pb-4">
                  <p className="text-muted-foreground text-sm font-semibold mb-1">
                    System Efficiency
                  </p>
                  <p className="text-3xl font-bold text-secondary">98.5%</p>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm font-semibold mb-1">
                    Warranty
                  </p>
                  <p className="text-2xl font-bold text-secondary">25 Years</p>
                </div>
              </div>

              <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-primary to-accent text-secondary font-bold rounded-lg hover:shadow-lg transition-all">
                Calculate Your Savings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
