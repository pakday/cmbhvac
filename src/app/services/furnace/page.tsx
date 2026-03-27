"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { CheckCircle, Phone, Flame, Wrench, Wind, Clock } from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: <Flame className="w-5 h-5 text-orange-400" />,
    title: "Furnace Repair & Installation",
    desc: "All makes and models serviced. If repair can solve your issue, we'll accomplish it quickly. If you need a replacement, we help you find the best solution for your needs and budget.",
  },
  {
    icon: <Wrench className="w-5 h-5 text-orange-400" />,
    title: "Boiler Service",
    desc: "Our technicians are licensed, highly trained, and remain up-to-date on the latest developments in the heating industry — including boiler systems for every home.",
  },
  {
    icon: <Wind className="w-5 h-5 text-orange-400" />,
    title: "Heat Pump Service",
    desc: "Whether you need service on a heat pump or want to upgrade to a high-efficiency system sized for your home, we're ready to deliver the comfort you deserve.",
  },
  {
    icon: <Clock className="w-5 h-5 text-orange-400" />,
    title: "Maintenance Plans",
    desc: "CMB HVAC offers comprehensive maintenance plans to help you avoid costly heater breakdowns. We look for small problems that often turn into large ones.",
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

/* ─── component ─────────────────────────────────────────── */

export default function FurnacePage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — full-bleed image · left text panel
      ══════════════════════════════════════════ */}
      <section className="hero-dark relative min-h-[78vh] flex items-center overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* RIGHT image that fades leftward */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-banner-3.jpg"
            alt="Residential HVAC furnace"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/40" />
        </div>

        {/* LEFT content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              Heating Services · CMB HVAC
            </div>

            <h1 className="heading-2xl font-black leading-[1.02] tracking-tight mb-6">
              Heater & Furnace
              <br />
              <span className="text-accent">Repair & Installation</span>
            </h1>

            <p className="text-xl font-semibold text-white/90 mb-3">
              Our Heater Repair Services Won&apos;t Leave You in the Cold
            </p>
            <p className="text-lg text-primary-foreground/75 leading-relaxed mb-10">
              We specialize in high-efficiency furnaces, sized for your home,
              and dialed in. Fully licensed, trained, and insured — we care
              about giving you extraordinary service and the absolute best
              equipment.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary btn-lg"
              >
                Book Appointment Here
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white btn-lg"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Licensed & Insured",
                "24/7 Emergency",
                "All Makes & Models",
                "Fixed Pricing",
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
          SERVICES — 2x2 icon list
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Heating Services
                <br />
                <span className="text-primary">from CMB HVAC</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                We&apos;re ready to tackle any type of heating need you have,
                whether you need service on a furnace, boiler, or heat pump. Our
                technicians are licensed, highly trained, and remain up-to-date
                on the latest developments in the heating industry.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {SERVICES.map((s, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                      {s.icon}
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img03.jpg"
                alt="Residential HVAC furnace in utility closet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOCALLY TRUSTED — image RIGHT, copy LEFT
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Locally Trusted</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Heater Repair &<br />
                <span className="text-accent">Installation You Can Trust</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                When we come to your home for a heating issue, we&apos;ll
                immediately identify the problem and find quick solutions. If a
                heating repair can solve your issue, we&apos;ll accomplish it
                quickly and reliably.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                If your system needs replacing or if you need a system for a new
                structure, we are ready to help you find the best solution for
                your needs and budget.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { n: "24/7", l: "Emergency Service" },
                  { n: "All", l: "Makes & Models" },
                  { n: "Fixed", l: "Upfront Pricing" },
                  { n: "100%", l: "Satisfaction Guaranteed" },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-2xl bg-white border border-border p-5"
                  >
                    <p className="h-small font-black text-accent">{stat.n}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Schedule Your Appointment
                </Link>
                <a href="tel:3858656749" className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-5 h-[520px]">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img07.jpg"
                  alt="Open furnace under maintenance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_services_img08.jpg"
                  alt="Goodman HVAC unit outside residential home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          24/7 EMERGENCY — dark section
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden bg-primary-dark">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="eyebrow">24/7 Emergency</span>
              <h2 className="heading-xl font-black text-white tracking-tight leading-tight mb-6">
                Call Our Heating
                <br />
                <span className="text-accent">Service Pros Now</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                No matter what kind of heater your home has, it needs heating
                maintenance to operate reliably. CMB HVAC offers comprehensive
                maintenance plans to help you avoid costly and frustrating
                heater breakdowns.
              </p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
                If you&apos;re facing emergency heater issues, we&apos;re ready
                to take your call 24/7. We offer emergency heating services when
                HVAC system failures happen on nights, weekends, and holidays.
              </p>
              <a
                href="tel:3858656749"
                className="btn-primary btn-lg text-lg"
              >
                <Phone className="w-5 h-5" />
                Call CMB HVAC at (385) 865-6749
              </a>
            </div>

            <div className="bg-[#0d2640] border border-primary-foreground/10 rounded-3xl p-8 md:p-10">
              <h3 className="text-white font-bold text-xl mb-6">
                Get an estimate for your next HVAC service
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-7">
                We&apos;re ready to take a look at your heating system!
              </p>
              <ul className="space-y-4">
                {[
                  "Free in-home diagnosis",
                  "Multiple fixed-price options presented",
                  "No hidden fees — ever",
                  "Financing options available",
                  "Licensed & fully insured team",
                  "Emergency response — nights & weekends",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-primary-foreground/80 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-7 border-t border-primary-foreground/10">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Schedule Your Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CREDENTIALS STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
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

      <CTABanner
        title="Stay Warm This Winter"
        description="Licensed & insured heating specialists. Fixed prices. Satisfaction guaranteed. Serving Salt Lake City & Northern Utah."
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
