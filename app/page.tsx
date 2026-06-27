import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ServicesSection } from "@/components/services-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { SavingsCalculator } from "@/components/savings-calculator";
import { ProcessTimeline } from "@/components/process-timeline";
import { WhyChooseSection } from "@/components/why-choose-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
        <CaseStudiesSection />
        <SavingsCalculator />
        <ProcessTimeline />
        <WhyChooseSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
