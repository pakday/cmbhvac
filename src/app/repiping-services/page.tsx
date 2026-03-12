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
  GitBranch,
  ShieldCheck,
  Clock,
  Flame,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */

const WHY_US = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Certified, Experienced Technicians",
    desc: "Our highly trained team brings years of specialized plumbing experience to every repiping job.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Reliable and On-Time Service",
    desc: "We respect your time and your property — showing up on schedule and delivering quality without delay.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Workmanship Guaranteed",
    desc: "Every project is backed by our satisfaction guarantee, so you can book with complete confidence.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Transparent, Upfront Pricing",
    desc: "No hidden fees. Just honest work at fair prices — presented before we begin.",
  },
];

const SERVICES = [
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: "Whole-Home Repiping",
    desc: "If you're dealing with frequent leaks, low water pressure, or rusty water, it may be time for a full home repipe. CMB Plumbing replaces outdated piping with modern, long-lasting materials like PEX or copper — improving water quality, system reliability, and overall peace of mind. Our skilled technicians complete projects efficiently with minimal disruption.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Mainline Replacements",
    desc: "A damaged or aging water main can lead to serious property damage. CMB Plumbing provides fast, expert mainline replacement services using high-performance materials built to withstand the elements and time. Whether it's due to pipe corrosion, soil movement, or invasive tree roots, we diagnose and resolve mainline issues before they become emergencies.",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    title: "Safe & Certified Gas Line Installations",
    desc: "When it comes to gas line installations, precision isn't optional — it's essential. CMB Plumbing's licensed professionals are trained to install new gas lines safely and in full compliance with building codes. Whether connecting a gas stove, installing an outdoor fire pit, or running gas to a new addition, we guarantee safety, reliability, and long-term performance.",
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function RepipingServicesPage() {
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
            src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repiping-1.jpg"
            alt="Plumbing Repiping Services"
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
              <GitBranch className="w-3.5 h-3.5 text-accent" />
              CMB Plumbing · Northern Utah
            </div>

            <h1 className="heading-2xl font-black leading-[1.02] tracking-tight mb-6">
              Repiping Services
              <br />
              <span className="text-accent">Done Right.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
              Expert repiping services and precision plumbing solutions across
              Northern Utah — specializing in full home repiping, mainline
              replacements, and gas line installations in Salt Lake &amp; Davis
              County.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary text-base py-3.5 px-8"
              >
                Book a Repipe Assessment
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
                "Whole-Home Repiping",
                "PEX & Copper",
                "Gas Line Install",
                "Workmanship Guarantee",
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
              <span className="eyebrow">Repiping Services</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Repiping Services in
                <br />
                <span className="text-primary">
                  Salt Lake &amp; Davis County
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                CMB Plumbing delivers expert repiping services and precision
                plumbing solutions across Northern Utah — trusted by homeowners
                and businesses alike. Specializing in full home repiping,
                mainline replacements, and gas line installations, we&apos;re
                committed to enhancing the safety, performance, and value of
                your property. We serve Bountiful, Salt Lake City, Ogden,
                Layton, West Valley City, Millcreek, Roy, and Draper.
              </p>
              <div className="border-l-4 border-accent pl-4 mb-10">
                <h3 className="font-bold mb-1">
                  Whole Home Repiping You Can Rely On
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you&apos;re dealing with frequent leaks, low water
                  pressure, or rusty water, it may be time for a full home
                  repipe. CMB Plumbing replaces outdated piping with modern,
                  long-lasting materials like PEX or copper — improving water
                  quality, system reliability, and overall peace of mind.
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
                  src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repiping-1.jpg"
                  alt="CMB Plumbing Repiping"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <GitBranch className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Trusted across Northern Utah
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Expert Repiping Services
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
              How Can We Help with
              <br />
              <span className="text-accent">a Repiping of a Home?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              With certified technicians, guaranteed workmanship, and
              transparent pricing, CMB Plumbing delivers repiping services you
              can trust — every job, every time.
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
              Schedule Your
              <br />
              <span className="text-primary">Repiping Repairs with Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From whole-home repiping to mainline replacements and certified
              gas line installations — our licensed plumbers handle it all
              across Northern Utah.
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
                  Get an Estimate
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
        eyebrow="Why More Homeowners Trust CMB Plumbing"
        message="CMB Plumbing provides fast plumbing repiping services in Salt Lake City &amp; the surrounding areas."
        buttonText="Book Our Expert Techs"
        buttonHref="/contact"
      />

      {/* ══════════════════════════════════════════
          IMAGE + COPY — image left · copy right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden lg:h-130 aspect-4/5 lg:aspect-auto">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-repiping-2.jpg"
                alt="CMB Plumbing repiping team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
            </div>

            <div>
              <span className="eyebrow">Ready to Upgrade?</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                You Can Get the Answers
                <br />
                <span className="text-accent">
                  to What May Seem Like a Big Question
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                When it&apos;s time to upgrade your plumbing system, don&apos;t
                gamble with guesswork — go with Utah&apos;s trusted repiping
                experts. CMB Plumbing delivers reliable, professional service
                that stands the test of time.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Book your appointment today and take the first step toward
                better plumbing, better safety, and peace of mind.
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
        </div>
      </section>

      <CTABanner
        title="Expert Repiping You Can Trust"
        description="Modern materials. Guaranteed workmanship. Transparent pricing. Serving Salt Lake & Davis County."
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
