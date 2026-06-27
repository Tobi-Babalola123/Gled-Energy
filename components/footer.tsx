"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-white/80">
                Get the latest solar tips, energy savings ideas, and company
                updates.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-accent font-semibold text-sm md:col-span-2">
                ✓ Thanks for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-secondary font-black text-sm">GLED</span>
              </div>
              <span className="font-bold text-xl">GLED Energy</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Transforming Nigerian energy with professional solar solutions,
              innovative battery storage, and expert installation services.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  name: "Facebook",
                  href: "https://facebook.com",
                  icon: FaFacebookF,
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com",
                  icon: FaInstagram,
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: FaLinkedinIn,
                },
                {
                  name: "X",
                  href: "https://x.com",
                  icon: FaXTwitter,
                },
              ].map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-secondary hover:shadow-lg"
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Solutions", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                "Solar Panels",
                "Battery Storage",
                "Inverters",
                "Monitoring Systems",
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                "Blog",
                "Installation Guide",
                "Cost Calculator",
                "Contact Support",
              ].map((resource) => (
                <li key={resource}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <p className="text-white/70 text-center md:text-left">
              © 2026 GLED Energy. All rights reserved.
            </p>

            <div className="flex gap-6 justify-center">
              <Link
                href="#"
                className="text-white/70 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-primary transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/70 text-sm">
                Nationwide Service • 24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
