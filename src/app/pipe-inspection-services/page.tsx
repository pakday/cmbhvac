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
  ShieldCheck,
  Eye,
  AlertTriangle,
  Wrench,
  Zap,
} from "lucide-react";

const INSPECTION_SERVICES = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "High-Resolution Pipe Cameras",
    desc: "Real-time, high-definition footage of interior pipe conditions. Our advanced inspection technology navigates through your plumbing system to pinpoint exactly where issues lie for fast, targeted repairs.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Complete System Assessment",
    desc: "We examine drain lines, water supply lines, and mainlines for signs of deterioration, blockage, corrosion, root intrusion, and structural failure. Nothing gets missed.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Acoustic Sensors & Pressure Testing",
    desc: "Beyond visual inspection — we use acoustic sensors and pressure testing to detect hidden issues within walls and underground lines without destructive tearing or digging.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Tailored Solutions & Expert Recommendations",
    desc: "After inspection, we offer customized repair solutions based on your pipe material and condition — from targeted repairs to pipe lining or full repiping with honest guidance.",
  },
];

const WHY_US = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Early Detection",
    desc: "Catch problems before they become expensive emergencies — save thousands in future repairs.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Non-Destructive Technology",
    desc: "No tearing up walls or floors. We diagnose issues with cutting-edge inspection tools that protect your property.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Licensed & Experienced",
    desc: "Understand Utah's plumbing challenges. Our experts offer regional expertise and honest recommendations.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Peace of Mind",
    desc: "Know exactly what's happening inside your plumbing system. Prevent costly water damage and health risks.",
  },
];

export default function PipeInspectionPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — solid left · faded right image
      ══════════════════════════════════════════ */}
      <section className="hero-dark relative min-h-[75vh] flex items-center overflow-hidden bg-primary-dark">
        {/* dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* RIGHT — faded image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
          <Image
            src="/cmb-plumbing-pipe-inspection-1.jpg"
            alt="Pipe Inspection Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/40" />
        </div>

        {/* LEFT — content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <Eye className="w-3.5 h-3.5 text-accent" />
              CMB Plumbing · Northern Utah
            </div>

            <h1 className="heading-2xl font-black leading-[1.02] tracking-tight mb-6">
              Professional Pipe
              <br />
              <span className="text-accent">Inspection Services</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
              Don't let hidden problems turn into costly disasters. CMB Plumbing
              uses advanced diagnostic tools to identify issues before they
              escalate — protecting your property and preventing expensive
              surprises.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="btn-primary btn-lg">
                Book Your Inspection
              </Link>
              <a href="tel:3858656749" className="btn-outline-white btn-lg">
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Licensed & Insured",
                "Fast Results",
                "Non-Destructive",
                "5-Star Rated",
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
              <span className="eyebrow">Pipe Inspection Services</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Pipe Inspections in
                <br />
                <span className="text-primary">
                  Salt Lake &amp; Davis County
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                At CMB Plumbing, we specialize in comprehensive home pipe
                inspections designed to protect your property, extend the life
                of your plumbing system, and prevent expensive surprises.
                Whether you&apos;re noticing early signs of leaks or just want
                peace of mind, our expert team delivers precise, non-invasive
                inspections using advanced diagnostic tools to identify hidden
                issues before they escalate.
              </p>
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

            {/* image with floating badge */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden min-h-115 md:min-h-135 lg:h-155">
                <Image
                  src="/cmb-plumbing-pipe-inspection-1.jpg"
                  alt="Professional Pipe Inspection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
              </div>
              {/* floating badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Non-destructive diagnosis
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Advanced Inspection Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY INSPECTIONS ARE CRITICAL FEATURE
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* image */}
            <div className="relative rounded-3xl overflow-hidden lg:h-130 aspect-4/5 lg:aspect-auto order-2 lg:order-1">
              <Image
                src="/cmb-plumbing-pipe-inspection-2.jpg"
                alt="Why Pipe Inspections Matter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
            </div>

            {/* copy */}
            <div className="order-1 lg:order-2">
              <span className="eyebrow">Protect Your Property</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Why Pipe Inspections Are
                <br />
                <span className="text-accent">Critical for Utah Homes</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Utah&apos;s shifting soil, freezing temperatures, and hard water
                conditions can put serious strain on your pipes. Over time,
                corrosion, scale buildup, and joint failures can lead to unseen
                damage inside your walls or underground. A professional pipe
                inspection is your best defense against water damage, rising
                water bills, and emergency plumbing repairs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Early detection can save you thousands in future repairs while
                protecting your property from costly water damage, mold growth,
                and structural issues. Don&apos;t wait for problems to become
                emergencies.
              </p>
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
              Comprehensive Inspections
              <br />
              <span className="text-accent">
                Backed by Trusted Local Expertise
              </span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              CMB Plumbing isn&apos;t just a service call — it&apos;s peace of
              mind. Our licensed plumbers identify problems and offer customized
              solutions based on your pipe material and condition. Whether
              it&apos;s a targeted repair, pipe lining, or full repiping, we
              walk you through every recommendation with honesty and clarity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-3xl p-7 hover:bg-primary-foreground/10 transition-colors"
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
          INSPECTION SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">What&apos;s Included</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Professional Pipe
              <br />
              <span className="text-primary">Inspection Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our pipe inspection service goes far beyond a quick visual check.
              Using high-resolution pipe cameras, acoustic sensors, and pressure
              testing, we inspect your entire plumbing system from the inside
              out.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {INSPECTION_SERVICES.map((s, idx) => (
              <article
                key={idx}
                className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary btn-xl">
              Book Your Pipe Inspection
            </Link>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready for Expert Help?"
        message={
          "CMB Plumbing provides fast plumbing services in Salt Lake City and the surrounding areas."
        }
        buttonText="Book Our Expert Techs"
        buttonHref="/contact"
      />

      {/* ══════════════════════════════════════════
          SCHEDULE
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">Schedule Your Inspection</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
              When Should You Schedule
              <br />
              <span className="text-accent">a Pipe Inspection?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If you&apos;re experiencing slow drains, recurring clogs,
              discolored water, unexplained odors, or high water bills,
              it&apos;s time for a full inspection. We also recommend scheduling
              a pipe inspection before purchasing an older home, after a major
              renovation, or if your plumbing is more than 20 years old.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Don&apos;t wait for leaks, damage, or high bills to tell you
              something&apos;s wrong. CMB Plumbing&apos;s pipe inspection
              service gives you peace of mind, protects your investment, and
              ensures your plumbing system is running at peak performance.
              Preventative pipe maintenance saves you money by catching early
              signs of wear or buildup before they become costly emergencies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book Your Appointment
              </Link>
              <a href="tel:3858656749" className="btn-secondary">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Inspect Your Plumbing?"
        description="Advanced technology. Licensed professionals. Peace of mind. Serving Northern Utah."
        primaryText="Book Your Inspection"
        primaryHref="/contact"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-4 h-4" />}
      />

      <Footer />
    </>
  );
}
