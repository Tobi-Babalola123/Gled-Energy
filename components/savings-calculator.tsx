'use client'

import { useState } from 'react'

export function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(50000)
  const [hoursWithout, setHoursWithout] = useState(8)
  const [propertyType, setPropertyType] = useState('residential')

  // Simple calculation logic
  const estimatedSavings = Math.round(monthlyBill * 0.75)
  const recommendedCapacity = propertyType === 'residential' ? 5 : 15
  const annualSavings = estimatedSavings * 12
  const monthlyROI = Math.round(estimatedSavings * 0.05)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
            Calculate Your Savings
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Much Can You Save?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Get a personalized estimate based on your energy needs
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-border p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-8">
              <div>
                <label className="block text-foreground font-bold mb-3">
                  Monthly Electricity Bill (₦)
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="mt-3 p-4 bg-background rounded-lg">
                  <p className="text-2xl font-bold text-primary">
                    ₦{monthlyBill.toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-foreground font-bold mb-3">
                  Hours Without Power Daily
                </label>
                <select
                  value={hoursWithout}
                  onChange={(e) => setHoursWithout(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-border rounded-lg font-semibold text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value={2}>2-4 hours</option>
                  <option value={6}>4-6 hours</option>
                  <option value={8}>6-8 hours</option>
                  <option value={12}>8+ hours</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-bold mb-3">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg font-semibold text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="residential">Residential Home</option>
                  <option value="commercial">Commercial Business</option>
                  <option value="industrial">Industrial Facility</option>
                </select>
              </div>

              <button className="w-full px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg text-lg">
                Get Detailed Quote
              </button>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">
                  Estimated Savings
                </p>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  ₦{estimatedSavings.toLocaleString()}
                </p>
                <p className="text-muted-foreground text-sm mt-2">per month</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl border border-secondary/20">
                <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">
                  Recommended System
                </p>
                <p className="text-3xl font-bold text-secondary">
                  {recommendedCapacity} kW Solar Array
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  with battery storage
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">
                  Annual Savings
                </p>
                <p className="text-3xl font-bold text-foreground">
                  ₦{annualSavings.toLocaleString()}
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">
                  Monthly ROI Growth
                </p>
                <p className="text-3xl font-bold text-primary">
                  ₦{monthlyROI.toLocaleString()}
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  These are estimates. Contact us for a detailed analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
