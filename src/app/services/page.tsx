"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { CheckCircle, Phone, ChevronDown, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

/* ─── data ─────────────────────────────────────────────── */

const CHOICES = [
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/heat.png",
    label: "I need help heating my home",
    href: "/services/furnace",
    hoverRing: "hover:border-orange-400/60 hover:shadow-orange-500/10",
    badge: "Furnace & Heating",
    badgeClass: "bg-orange-500/20 text-orange-300",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/Cool.png",
    label: "I need help cooling my home",
    href: "/services/ac",
    hoverRing: "hover:border-blue-400/60 hover:shadow-blue-400/10",
    badge: "AC Repair",
    badgeClass: "bg-blue-400/20 text-blue-300",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/heat_cool.png",
    label: "I need a new system to heat and cool my home",
    href: "/contact",
    hoverRing: "hover:border-accent/60 hover:shadow-accent/10",
    badge: "New Installation",
    badgeClass: "bg-accent/20 text-orange-300",
  },
];

const CREDENTIALS = [
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_experience_icon.png",
    label: "Experienced",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_Licensed_icon.png",
    label: "Licensed",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_insured_icon.png",
    label: "Insured",
  },
  {
    icon: "https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-certified-icon.png",
    label: "Certified",
  },
];

const STEPS = [
  {
    num: "01",
    title: "We Text You First",
    body: "Before we arrive we'll text you our exact arrival time.",
  },
  {
    num: "02",
    title: "Thorough Examination",
    body: "Upon arrival, we'll begin thoroughly examining your units and ductwork.",
  },
  {
    num: "03",
    title: "Load Calculations",
    body: "We'll perform load calculations to determine correct sizing.",
  },
  {
    num: "04",
    title: "Fixed-Price Options",
    body: "We'll present multiple options for a new AC unit with a fixed price.",
  },
  {
    num: "05",
    title: "Financing Help",
    body: "If you'd like, we will help you find financing appropriate for your budget.",
  },
];

const FAQS = [
  {
    q: "Do you offer financing?",
    a: "Of course we do! We work with many different banks and will help find you the right financing to fit your budget and credit score. Some of our most popular plans are 0% financing for 36–60 months.",
  },
  {
    q: "Do you offer weekend appointments?",
    a: "Absolutely! We understand that everyone's schedule is a little different and we are happy to arrange a time that fits your schedule. Give us a ring and we'll be happy to accommodate you!",
  },
  {
    q: "How fast can I have a new system installed?",
    a: "Most new installations can be scheduled and installed the next day after your in-home measurement. Equipment shortages may affect your exact installation date due to supply chain factors out of our control.",
  },
  {
    q: "Are permits and inspection fees included?",
    a: "Permits and inspection fees may be required depending on your location and are not included on the estimate. Each town and county is a little different — simply ask your comfort designer which permits are required so they can add them to your package.",
  },
  {
    q: "Do you offer any other brands than the equipment listed?",
    a: "Yep, we sure do! We have access to many others. Give us a ring and we'd be happy to find the perfect system for your home!",
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — "What do you need?" choice picker
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary-dark min-h-[82vh] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-banner-2.jpg"
            alt="CMB HVAC Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/88" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-6">
              <Zap className="w-3.5 h-3.5 text-accent" />
              CMB HVAC · Salt Lake City
            </div>
            <h1 className="heading-2xl font-black text-white leading-tight mb-4">
              What can we help you{" "}
              <span className="text-accent">with today?</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
              Choose what you need and we&apos;ll take it from there —
              experienced, licensed, insured, and certified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {CHOICES.map((c, idx) => (
              <Link
                key={idx}
                href={c.href}
                className={`group relative flex flex-col items-center text-center rounded-3xl border border-primary-foreground/15 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl ${c.hoverRing}`}
              >
                <div className="relative w-20 h-20 mb-6">
                  <Image
                    src={c.icon}
                    alt={c.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4 ${c.badgeClass}`}
                >
                  {c.badge}
                </span>
                <p className="text-base font-semibold text-white leading-snug">
                  {c.label}
                </p>
                <ArrowRight className="w-4 h-4 text-accent mt-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              "Licensed & Insured",
              "NATE Certified",
              "Same-Day Service",
              "5-Star Rated",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/50 font-medium"
              >
                <CheckCircle className="w-3 h-3 text-accent/70" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO — "Is it feeling warm?"
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Cooling Specialists</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-5">
                Is it feeling warm
                <br />
                <span className="text-accent">in your house?</span>
              </h2>
              <p className="text-xl font-semibold text-primary mb-4">
                Let us cool you down!
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We specialize in high-efficiency air-conditioning systems, sized
                for your home, and dialed in. We&apos;ll make sure your home
                stays cool and comfortable even on the hottest days of the
                summer!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Your Appointment
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  (385) 865-6749
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-auto lg:h-120">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img02.jpg"
                alt="CMB HVAC technician servicing AC unit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CREDENTIALS STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center justify-center gap-3 py-10 px-4"
              >
                <div className="relative w-14 h-14">
                  <Image
                    src={c.icon}
                    alt={c.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-foreground tracking-wide">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SCHEDULE — action shot + process steps
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="eyebrow">Schedule</span>
            <h2 className="heading-xl font-black text-white tracking-tight leading-tight mb-4">
              Schedule an <span className="text-accent">In-Home Visit</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              What&apos;s the easiest way to purchase a new heating and cooling
              system? We&apos;ll walk you through everything in 30 minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2024/06/action-shots-3.jpg"
                alt="CMB HVAC team scheduling in-home visit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg">
                  We make sure you are satisfied!
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  Every job backed by our satisfaction guarantee
                </p>
              </div>
            </div>

            <div className="bg-[#0d2640] border border-primary-foreground/10 rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-2">
                Your 30-Minute Home Visit
              </h3>
              <p className="text-primary-foreground/60 text-sm mb-7">
                Here is what you can expect during your in-home visit:
              </p>
              <ol className="space-y-6">
                {STEPS.map((s) => (
                  <li key={s.num} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 text-accent text-xs font-black">
                      {s.num}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">
                        {s.title}
                      </p>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 pt-7 border-t border-primary-foreground/10">
                <a
                  href="tel:3858656749"
                  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-white text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  Give us a call if you have questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">FAQs</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-5">
                Got Questions?
                <br />
                <span className="text-primary">We Have Answers.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At CMB HVAC, we understand that installing or replacing an HVAC
                system can be a significant investment. We&apos;ve compiled
                answers to the most commonly asked questions to help you make
                informed decisions.
              </p>
              <Link href="/contact" className="btn-primary">
                Ask Us Anything
              </Link>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const open = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      open ? "border-accent/40 shadow-md" : "border-border"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-muted transition-colors"
                    >
                      <span
                        className={`font-semibold text-base transition-colors ${
                          open ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          open
                            ? "rotate-180 text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 pb-6 pt-1 text-muted-foreground text-sm leading-relaxed border-t border-border">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Comfortable?"
        description="Licensed & insured. Fixed prices. Satisfaction guaranteed. Serving Salt Lake City & Northern Utah."
        primaryText="Book Appointment"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
      />

      <Footer />
    </>
  );
}
