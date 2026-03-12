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
  Sparkles,
  Droplets,
  Wrench,
} from "lucide-react";

const WHY_US = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Proven Expertise",
    desc: "Licensed plumbers with decades of residential & commercial installation experience.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Premium Materials",
    desc: "Trusted brands and current best practices — guaranteed lasting performance.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Responsive Service",
    desc: "From first contact to final walkthrough, your comfort and satisfaction come first.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Results You Trust",
    desc: "Every installation backed by our workmanship guarantee — book with total confidence.",
  },
];

const SERVICES = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Water Heater Installations",
    desc: "Say goodbye to cold showers and high energy bills. CMB Plumbing specializes in fast, reliable water heater installations — whether you're upgrading to a high-efficiency tankless system or replacing an outdated unit.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Custom Bathroom Installations",
    desc: "Create the bathroom you've always wanted. CMB Plumbing installs everything from deep soaking tubs to sleek modern units. Expert installers ensure precise fit, proper plumbing integration, and clean watertight results.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Fixture Installations for Kitchens & Baths",
    desc: "Your fixtures matter. Whether you're remodeling or updating, CMB Plumbing offers top-tier installation for faucets, sinks, showerheads, and more — combining aesthetic appeal with long-lasting durability.",
  },
];

export default function PlumbingInstallationPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO — solid left · faded right image
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-primary-dark">
        {/* dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* right-side image with gradient fade */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none select-none">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-installation-1.jpg"
            alt="CMB Plumbing professional installation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/70 to-transparent" />
        </div>

        {/* left content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-36">
          <div className="max-w-xl">
            <div className="badge badge-accent mb-6">
              <Wrench className="w-3.5 h-3.5" />
              Plumbing Installation Services
            </div>

            <h1 className="heading-2xl font-black tracking-tight leading-[0.95] mb-6 text-white">
              Plumbing Installations
              <span className="block text-accent">/ Done Right.</span>
            </h1>

            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8 max-w-lg">
              CMB Plumbing is Utah&apos;s trusted source for expert plumbing
              installation services — designed to elevate comfort, efficiency,
              and long-term value in your home.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn-primary">
                Book an Installation
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/60">
              {[
                "Licensed Plumbers",
                "Premium Materials",
                "Precision Install",
                "Satisfaction Guaranteed",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-accent/70" />
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
              <span className="eyebrow">Plumbing Installations</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Precision Installations for
                <br />
                <span className="text-primary">Your Water &amp; Gas Needs</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                From water heater installations to custom tub and plumbing
                fixture upgrades, our licensed professionals deliver flawless
                results you can rely on. Proudly serving Bountiful, Salt Lake
                City, Ogden, Layton, West Valley City, Millcreek, Roy, and
                Draper.
              </p>
              <div className="border-l-4 border-accent pl-4 mb-10">
                <h3 className="font-bold mb-1">
                  More Than Just Emergency Calls
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Plumbing is more than messy accidents and emergency calls. CMB
                  Plumbing can assist you in getting the water features,
                  fixtures, and their related equipment that transform your
                  kitchen, bathroom, or outdoor space. Connect with us to find
                  out how we can bring your vision to life.
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
                  src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-installation-1.jpg"
                  alt="CMB Plumbing installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-5 shadow-2xl border border-border max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Trusted across Northern Utah
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      Expert Installation Services
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
              We Fix Any Plumbing
              <br />
              <span className="text-accent">Install Issue</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              With certified technicians, guaranteed workmanship, and
              transparent pricing, CMB Plumbing delivers installation services
              you can trust — every job, every time.
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
          IMAGE + COPY — image left · copy right
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden lg:h-130 aspect-4/5 lg:aspect-auto">
              <Image
                src="https://cmbhvac.com/wp-content/uploads/2025/06/cmb-plumbing-installation-2.jpg"
                alt="CMB Plumbing installation team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 via-transparent to-transparent" />
            </div>

            <div>
              <span className="eyebrow">Schedule Your Install</span>
              <h2 className="heading-xl font-black tracking-tight leading-tight mb-6">
                Schedule Your Plumbing
                <br />
                <span className="text-accent">Install Projects with Us</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                If you&apos;re planning a plumbing upgrade, don&apos;t settle
                for average. CMB Plumbing delivers installation excellence you
                can see and feel — book your appointment and enjoy hassle-free
                expert service tailored to your home.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                From first contact to final walkthrough, we&apos;re committed to
                your complete satisfaction — serving Salt Lake and Davis County
                with pride.
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

      {/* ══════════════════════════════════════════
          PAGE CTA STRIP
      ══════════════════════════════════════════ */}
      <PageCTA
        eyebrow="We Fix Any of Your Problem Plumbing Install Issues"
        message="CMB Plumbing provides fast plumbing installation services in Salt Lake City &amp; the surrounding areas."
        buttonText="Book Our Expert Techs"
        buttonHref="/contact"
      />

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Our Installations</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Expert Plumbing Installation
              <br />
              <span className="text-primary">Services in Northern Utah</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our licensed plumbers handle every installation with precision —
              from water heaters and custom bathrooms to kitchen and bath
              fixtures.
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

      <CTABanner
        title="Ready to Upgrade Your Plumbing?"
        description="Expert installations. Premium materials. Satisfaction guaranteed. Serving Salt Lake & Davis County."
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
