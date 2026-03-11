"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  CheckCircle,
  Zap,
  Clock,
  Smartphone,
  Award,
  Calendar,
  Percent,
  Headphones,
} from "lucide-react";
import { useState } from "react";

export default function MembershipPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600&q=80"
            alt="Home comfort membership"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/100 via-brand/80 to-brand/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-4">
              <Award className="w-3.5 h-3.5" />
              Premium Membership
            </div>
            <h1 className="heading-xl font-bold leading-tight mb-6">
              Join Our Membership Program
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Save on repairs, get priority service, and enjoy 24/7 emergency
              support. CMB's membership program is the smart choice for
              homeowners who want peace of mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-lg py-3 px-8">
                Enroll Today
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-lg py-3 px-8"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS OVERVIEW */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Membership Benefits"
            title="Exclusive Perks Save You Money & Time"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <Percent className="w-6 h-6" />,
                title: "15% Off Repairs",
                desc: "Every service call, every job.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Bi-Annual Check-Ups",
                desc: "Preventive maintenance included.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "24/7 Priority Support",
                desc: "Emergency help anytime.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Priority Scheduling",
                desc: "Next available appointment.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="card text-center">
                <div className="icon-box icon-box-lg icon-box-secondary mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED BENEFITS */}
      <section className="section-dark bg-linear-to-br from-brand to-primary-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-m font-bold mb-4 text-center">
            What's Included
          </h2>
          <p className="text-lg text-primary-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to keep your HVAC and plumbing systems running
            smoothly all year long.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Maintenance & Inspections",
                items: [
                  "Spring & fall seasonal check-ups",
                  "Filter replacements",
                  "Performance diagnostics",
                  "System adjustments",
                  "Leak inspections",
                ],
              },
              {
                title: "Repair & Service",
                items: [
                  "15% discount on all service calls",
                  "No emergency surcharge (24/7)",
                  "Priority scheduling",
                  "Priority parts ordering",
                  "Extended warranty on covered items",
                ],
              },
              {
                title: "Customer Support",
                items: [
                  "Dedicated member hotline",
                  "Same-day response (emergencies)",
                  "Online appointment booking",
                  "Text-message reminders",
                  "VIP member status",
                ],
              },
              {
                title: "Exclusive Deals",
                items: [
                  "15% off emergency calls",
                  "Member-exclusive seasonal promotions",
                  "Free indoor air quality assessment",
                  "Financing discounts",
                  "System upgrade specials",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-primary-foreground/80 flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Membership Plans"
            title="Simple, Transparent Pricing"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {[
              {
                name: "HVAC Only",
                price: "$179",
                period: "/year",
                desc: "For heating & cooling systems",
                features: [
                  "Spring & fall check-ups",
                  "15% off repairs",
                  "24/7 emergency support",
                  "Priority scheduling",
                  "Parts discounts",
                ],
                cta: "Start HVAC Membership",
              },
              {
                name: "Combo (HVAC + Plumbing)",
                price: "$279",
                period: "/year",
                desc: "Best value — both systems covered",
                features: [
                  "Bi-annual HVAC check-ups",
                  "Plumbing inspections",
                  "15% off all repairs",
                  "24/7 emergency support",
                  "Priority scheduling",
                  "Member-exclusive discounts",
                ],
                highlight: true,
                cta: "Start Combo Membership",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 ${plan.highlight ? "bg-accent text-white ring-2 ring-accent" : "card"}`}
              >
                <h3
                  className={`h-small font-bold mb-2 ${plan.highlight ? "text-white" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                >
                  {plan.desc}
                </p>

                <div className="mb-6">
                  <span className="heading-l font-bold">{plan.price}</span>
                  <span
                    className={
                      plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                    }
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle
                        className={`w-5 h-5 ${plan.highlight ? "text-white" : "text-accent"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={
                    plan.highlight
                      ? "btn-white w-full block text-center py-3"
                      : "btn-secondary w-full block text-center py-3"
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            No long-term contract required. Cancel anytime. Both plans include
            emergency 24/7 support.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Membership Questions Answered"
            centered
          />

          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {[
              {
                q: "Can I cancel my membership anytime?",
                a: "Yes — no long-term contract. You can cancel anytime with 30 days' notice.",
              },
              {
                q: "How do bi-annual check-ups work?",
                a: "We schedule check-ups in spring (cooling prep) and fall (heating prep). You'll receive reminders, and we text arrival times.",
              },
              {
                q: "Does the 15% discount apply to all services?",
                a: "Yes — repairs, installations, maintenance, and emergency calls all receive the 15% member discount.",
              },
              {
                q: "What if I need emergency service at 2 AM?",
                a: "Call us — we're available 24/7 for emergencies. Members get priority response and no emergency surcharge.",
              },
              {
                q: "Can I upgrade from HVAC-only to Combo?",
                a: "Absolutely. Just contact us, and we'll adjust your plan. Prorated rates apply.",
              },
              {
                q: "Do I get a discount on new equipment?",
                a: "Yes — members receive member-exclusive discounts on equipment upgrades and replacements.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === idx ? null : idx)
                  }
                  className="accordion-trigger w-full"
                >
                  {faq.q}
                  <svg
                    className={`w-5 h-5 transition-transform ${openAccordion === idx ? "rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {openAccordion === idx && (
                  <div className="px-5 py-4 text-foreground border-t border-border">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Members Love Us"
            title="Real Reviews from Real Members"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Sarah M.",
                quote:
                  "The membership pays for itself after one or two service calls. Plus, knowing I get priority help means I sleep better at night.",
              },
              {
                name: "James T.",
                quote:
                  "Called them at 11 PM with a heating emergency. They showed up in under an hour. Best $179 I spent all year.",
              },
              {
                name: "Michelle R.",
                quote:
                  "The bi-annual check-ups caught a small issue before it became expensive. Worth every penny.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="card">
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Save on HVAC & Plumbing?"
        description="Join thousands of happy members. Enroll today and get priority service, 15% off repairs, and 24/7 support."
        primaryText="Join Now"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Smartphone className="w-5 h-5" />}
      />

      <Footer />
    </>
  );
}
