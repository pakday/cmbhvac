"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { PageCTA } from "@/components/PageCTA";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Flame,
  ShieldCheck,
  Clock,
  Zap,
  TrendingDown,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */

const WHY_US = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Certified Experts",
    desc: "Licensed plumbers highly trained in water heater diagnostics, installations, and replacements.",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    title: "Top-Tier Brands",
    desc: "We install only trusted water heater systems built to perform and endure for years.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Customer-First Approach",
    desc: "From fast scheduling to clean job sites, your comfort and satisfaction come first.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Transparent Pricing",
    desc: "No surprises — just honest, competitive quotes and quality workmanship.",
  },
];

const SERVICES = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Expert Water Heater Repairs — Fast, Accurate, Hassle-Free",
    desc: "No hot water? Strange noises? Inconsistent temperatures? Whether you own a traditional tank unit or a tankless water heater, CMB Plumbing offers same-day diagnostic and repair services. Our technicians arrive on time, identify the issue on the spot, and implement durable solutions — without the guesswork or delays.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Professional Water Heater Installation Services",
    desc: "Upgrading your water heater is one of the smartest ways to increase home comfort and energy savings. CMB Plumbing handles the entire process — from sizing and system selection to expert installation — so you get a unit that fits your needs and your budget.",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "Water Heater Replacements That Pay Off",
    desc: "If your current water heater is aging, inefficient, or constantly breaking down, it may be time to replace it. CMB Plumbing makes replacement easy — and worthwhile. We'll help you select a high-performance unit that heats water faster, lasts longer, and reduces your energy bills.",
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function WaterHeaterServicesPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — solid left · faded right image
      ══════════════════════════════════════════ */}
      <section className="hero-dark relative min-h-[75vh] flex items-center overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-water-heater-repair-1.jpg"
            alt="Water Heater Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <Flame className="w-3.5 h-3.5 text-accent" />
              CMB Plumbing · Northern Utah
            </div>

            <h1 className="heading-2xl font-black leading-[1.02] tracking-tight mb-6">
              Water Heater
              <br />
              <span className="text-accent">Done Right.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
              Hot water isn&apos;t a luxury — it&apos;s a necessity. Fast,
              expert repairs to seamless installations and high-efficiency
              replacements. Serving Salt Lake &amp; Davis County with certified
              care every day.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary text-base py-3.5 px-8"
              >
                Book a Water Heater Service
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-base py-3.5 px-8"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Same-Day Diagnostics",
                "Tank & Tankless",
                "Energy Efficient",
                "Satisfaction Guaranteed",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-xs text-primary-foreground/50 font-medium"
                >
                  <CheckCircle className="w-3 h-3 text-accent/70" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO — copy left · image right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Water Heater Services</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Water Heater Repair Services in
                <br />
                <span className="text-primary">
                  Salt Lake &amp; Davis County
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At CMB Plumbing, we make sure your water heater delivers
                comfort, efficiency, and reliability every single day. Our
                certified plumbing team serves homeowners in Bountiful, Salt
                Lake City, Ogden, Layton, and surrounding Utah communities with
                precision and care.
              </p>
              <div className="border-l-4 border-accent pl-4 mb-10">
                <h3 className="font-bold mb-1">
                  Expert Water Heater Repairs — Fast, Accurate, Hassle-Free
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No hot water? Strange noises? Inconsistent temperatures?
                  Whether you own a traditional tank unit or a tankless water
                  heater, CMB Plumbing offers same-day diagnostic and repair
                  services to restore your system quickly. Our technicians
                  arrive on time, identify the issue on the spot, and implement
                  durable solutions that get your hot water flowing — without
                  the guesswork or delays.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book Our Expert Techs
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden min-h-115 md:min-h-135 lg:h-155">
                <Image
                  src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-water-heater-repair-1.jpg"
                  alt="Water Heater Repair"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Same-day service available
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Expert Water Heater Repair
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE — dark immersive
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Why CMB Plumbing?
            </span>
            <h2 className="heading-xl font-black tracking-tight leading-tight text-white mb-5">
              Why More in Utah Choose
              <br />
              <span className="text-accent">CMB Plumbing</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Certified experts, trusted brands, and a customer-first approach —
              CMB Plumbing delivers water heater services you can count on every
              single time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-3xl p-7 hover:bg-primary-foreground/13 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Our Services</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Schedule Your Water Heater
              <br />
              <span className="text-primary">Repairs with Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From same-day repairs to expert installations and energy-efficient
              replacements — we cover it all across Northern Utah.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
              <article
                key={idx}
                className="group relative bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors text-accent">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Book Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAGE CTA STRIP
      ══════════════════════════════════════════ */}
      <PageCTA
        eyebrow="Homeowners Are Turning to Our Tech Pros"
        message="CMB Plumbing provides fast plumbing services in Salt Lake City and the surrounding areas."
        buttonText="Book Our Expert Techs"
        buttonHref="/contact"
      />

      {/* ══════════════════════════════════════════
          IMAGE + REPLACEMENTS — image left · copy right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden lg:h-130 aspect-4/5 lg:aspect-auto">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-water-heater-repair-2.jpg"
                alt="Water heater replacement"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
            </div>

            <div>
              <span className="eyebrow">Smart Investment</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Water Heater Replacements
                <br />
                <span className="text-accent">That Pay Off</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                If your current water heater is aging, inefficient, or
                constantly breaking down, it may be time to replace it. CMB
                Plumbing makes replacement easy — and worthwhile. We&apos;ll
                help you select a high-performance unit that heats water faster,
                lasts longer, and reduces your energy bills.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  {
                    icon: <CheckCircle className="w-4 h-4" />,
                    text: "Tailored system recommendations based on your household's water usage",
                  },
                  {
                    icon: <Zap className="w-4 h-4" />,
                    text: "Energy-efficient options to lower monthly utility costs",
                  },
                  {
                    icon: <ShieldCheck className="w-4 h-4" />,
                    text: "Flawless setup — every installation performed to code and tested thoroughly",
                  },
                  {
                    icon: <CheckCircle className="w-4 h-4" />,
                    text: "Consistent, reliable hot water from day one",
                  },
                  {
                    icon: <TrendingDown className="w-4 h-4" />,
                    text: "Reduced risk of emergency breakdowns and lower operating costs",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="text-accent mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book Your Appointment Here
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Hot Water Problems? We've Got You Covered."
        description="Same-day diagnostics. Energy-efficient options. Satisfaction guaranteed. Serving Salt Lake & Davis County."
        primaryText="Book Your Appointment"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
      />

      <Footer />
    </>
  );
}
