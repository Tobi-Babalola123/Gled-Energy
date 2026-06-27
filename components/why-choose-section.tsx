'use client'

import Image from 'next/image'

const features = [
  'Certified Engineers',
  'Premium Components',
  'Manufacturer Warranty',
  'Fast Installation',
  'Excellent Customer Support',
  'Affordable Financing',
]

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/installation-service.png"
              alt="Professional installation team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
                Why Choose GLED Energy
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Thousands Trust GLED Energy
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With over 500 successful installations and a team of certified professionals, we&apos;re committed to delivering excellence in every project.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary font-bold">
                      ✓
                    </div>
                  </div>
                  <p className="font-semibold text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg text-base md:text-lg">
                Request Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all text-base md:text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
