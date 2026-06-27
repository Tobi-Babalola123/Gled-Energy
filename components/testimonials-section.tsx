"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaUserTie,
  FaUserGraduate,
  FaUserCog,
  FaUserAlt,
  FaStar,
} from "react-icons/fa";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    name: "Chukwu Okonkwo",
    location: "Lagos",
    rating: 5,
    quote:
      "GLED Energy completely transformed our home. No more generator noise and our electricity bill dropped by 75%. The installation team was professional and efficient. Highly recommended!",
    image: FaUserTie,
  },
  {
    id: 2,
    name: "Fatima Hassan",
    location: "Abuja",
    rating: 5,
    quote:
      "As a business owner, our energy costs were killing our profits. The ROI was incredible. Our energy bills dropped from ₦2.5M to ₦500K monthly. Best business decision!",
    image: FaUserGraduate,
  },
  {
    id: 3,
    name: "Dr. Samuel Obi",
    location: "Port Harcourt",
    rating: 5,
    quote:
      "The professionalism and quality of work exceeded my expectations. Production efficiency increased 40% after installation. Power is no longer an issue for our operations.",
    image: FaUserAlt,
  },
  {
    id: 4,
    name: "Adekunle Adeyemi",
    location: "Ibadan",
    rating: 5,
    quote:
      "Customer service was exceptional. They answered all my questions and made the process seamless. I saved over ₦500K in the first year. Worth every naira!",
    image: FaUserCog,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoPlay) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlay]);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative overflow-x-hidden py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Customer Stories
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from homeowners and businesses that switched to clean,
            reliable solar energy with GLED Energy.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-14">
          {(() => {
            const ActiveIcon = testimonials[activeIndex].image;

            return (
              <div className="relative overflow-x-hidden overflow-y-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-accent/10 p-8 md:p-12 shadow-xl">
                <div className="absolute -top-16 overflow-x-hidden -right-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative flex flex-col justify-between gap-10">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map(
                        (_, i) => (
                          <FaStar
                            key={i}
                            size={22}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ),
                      )}
                    </div>

                    <p className="text-xl md:text-2xl italic leading-relaxed text-foreground">
                      "{testimonials[activeIndex].quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg">
                      <ActiveIcon size={28} className="text-secondary" />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-foreground">
                        {testimonials[activeIndex].name}
                      </h4>

                      <p className="text-primary font-medium">
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="rounded-lg border border-border px-5 py-2 font-semibold hover:bg-muted transition-all"
          >
            {isAutoPlay ? "Pause" : "Play"}
          </button>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {testimonials.map((testimonial) => {
            const Icon = testimonial.image;

            return (
              <div
                key={testimonial.id}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="mb-6 italic text-muted-foreground leading-7 line-clamp-4">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>

                    <p className="text-sm text-primary">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
