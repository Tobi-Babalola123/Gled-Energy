'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const caseStudies = [
  {
    id: 1,
    title: 'Modern Lagos Residence',
    location: 'Lagos, Nigeria',
    image: '/case-study-1.png',
    challenge: 'Unstable power supply and rising electricity costs affecting daily operations.',
    solution: 'Installed 10kW solar system with 15kWh battery storage for complete energy independence.',
    capacity: '10 kW Solar Array',
    testimonial: '"GLED Energy transformed our home! No more generator noise and our electricity bill dropped by 75%. Highly recommended!"',
    author: 'Chukwu Okonkwo',
  },
  {
    id: 2,
    title: 'Commercial Office Complex',
    location: 'Abuja, Nigeria',
    image: '/case-study-2.png',
    challenge: 'High operational costs due to diesel generators and unreliable grid power.',
    solution: 'Deployed 50kW solar system with advanced monitoring to offset 80% of energy consumption.',
    capacity: '50 kW Solar Array',
    testimonial: '"The ROI was incredible. Our energy bills dropped from ₦2.5M to ₦500K monthly. Best business decision!"',
    author: 'Fatima Hassan',
  },
  {
    id: 3,
    title: 'Industrial Manufacturing Facility',
    location: 'Port Harcourt, Nigeria',
    image: '/case-study-3.png',
    challenge: 'Manufacturing interrupted due to frequent power outages affecting productivity.',
    solution: 'Implemented 100kW industrial-grade system with hybrid backup for continuous operations.',
    capacity: '100 kW Solar Array',
    testimonial: '"Production efficiency increased 40% after installation. Power is no longer an issue."',
    author: 'Engineer David Mensah',
  },
]

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoPlay) return

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length)
    }, 5000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isAutoPlay])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Projects, Real Results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how GLED Energy has helped businesses and homeowners transform their energy independence
          </p>
        </div>

        {/* Main Case Study Card */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={caseStudies[activeIndex].image}
                alt={caseStudies[activeIndex].title}
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                  {caseStudies[activeIndex].location}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {caseStudies[activeIndex].title}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">
                    Challenge
                  </p>
                  <p className="text-lg text-foreground">
                    {caseStudies[activeIndex].challenge}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">
                    Solution
                  </p>
                  <p className="text-lg text-foreground">
                    {caseStudies[activeIndex].solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-primary font-bold text-lg">
                  {caseStudies[activeIndex].capacity}
                </p>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
                <p className="text-foreground text-lg italic leading-relaxed mb-3">
                  {caseStudies[activeIndex].testimonial}
                </p>
                <p className="font-bold text-foreground">
                  {caseStudies[activeIndex].author}
                </p>
              </div>

              <button className="px-8 py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg">
                View Project Details
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-border hover:bg-primary/20 transition-all hover:border-primary"
              aria-label="Previous project"
            >
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-border hover:bg-primary/20 transition-all hover:border-primary"
              aria-label="Next project"
            >
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'bg-primary w-8 h-2'
                    : 'bg-border w-2 h-2 hover:bg-muted-foreground'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-6 py-2 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-muted transition-all"
          >
            {isAutoPlay ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </section>
  )
}
