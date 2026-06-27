'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How much does solar installation cost?',
    answer:
      'The cost varies depending on your system size and specific requirements. A typical residential system ranges from ₦2-5 million, while commercial systems can be higher. We offer flexible financing options to make solar accessible to everyone. Contact us for a personalized quote.',
  },
  {
    question: 'How long do batteries last?',
    answer:
      'Our premium lithium batteries are designed to last 10-15 years with proper maintenance. They typically retain 80% capacity after 10 years of use. We provide manufacturer warranties for added peace of mind and cover maintenance costs.',
  },
  {
    question: 'Do you offer maintenance and repairs?',
    answer:
      'Yes! We provide comprehensive 24/7 monitoring and maintenance services. Our team performs regular system checks, cleaning, and repairs. Maintenance packages are tailored to your system size and needs.',
  },
  {
    question: 'Can solar power run my entire home?',
    answer:
      'Absolutely! With the right system size and battery storage, solar can power your entire home. We design custom systems based on your energy consumption patterns to ensure complete independence from the grid.',
  },
  {
    question: 'Do you provide financing?',
    answer:
      'Yes, we offer multiple financing options including installment plans, bank financing partnerships, and government incentive programs. Our financing makes solar affordable for both residential and commercial clients.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'We provide 25-year manufacturer warranties on solar panels and 10-year warranties on batteries and inverters. Our workmanship is also guaranteed for 5 years. We stand behind our installations with comprehensive coverage.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Common Questions Answered
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about solar energy and our services
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 md:px-8 py-4 md:py-6 flex items-center justify-between bg-background hover:bg-white transition-colors"
              >
                <span className="font-bold text-lg md:text-xl text-foreground text-left">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 md:px-8 py-4 md:py-6 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 text-center">
          <p className="text-lg md:text-xl text-foreground mb-6">
            Still have questions? Our experts are ready to help!
          </p>
          <button className="px-10 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg text-lg">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
