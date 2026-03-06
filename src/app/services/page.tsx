"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  Flame,
  Snowflake,
  Wrench,
  GitBranch,
  Filter,
  Droplets,
  Building2,
  CheckCircle,
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Star,
  Award,
} from "lucide-react";

const services = [
  {
    category: "Heating & Cooling",
    icon: <Flame className="w-6 h-6" />,
    color: "bg-blue-50 text-[#133F60]",
    items: [
      {
        title: "Air Conditioning",
        desc: "Repair, installation, and maintenance. Variable-speed systems, heat pumps, and ductless mini-splits.",
        href: "/services/ac",
        icon: <Snowflake className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1631545806609-22ceb4037852?w=600&q=80",
      },
      {
        title: "Furnace & Heating",
        desc: "High-efficiency furnace repair and installation. 24/7 emergency service throughout Utah winters.",
        href: "/services/furnace",
        icon: <Flame className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      },
      {
        title: "Commercial HVAC",
        desc: "New construction, commercial installations, and large-scale systems for businesses.",
        href: "#",
        icon: <Building2 className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      },
    ],
  },
  {
    category: "Plumbing",
    icon: <Droplets className="w-6 h-6" />,
    color: "bg-orange-50 text-[#DB5425]",
    items: [
      {
        title: "Plumbing Repair",
        desc: "Leak detection, burst pipes, drains, toilets, fixtures — same-day response available.",
        href: "/plumbing-repair-services",
        icon: <Wrench className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
      },
      {
        title: "Plumbing Installation",
        desc: "Full plumbing installations for new builds, remodels, and fixture upgrades.",
        href: "/plumbing-installation-services",
        icon: <Wrench className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
      },
      {
        title: "Repiping Services",
        desc: "Whole-home repiping, copper and PEX solutions for aging or failing pipe systems.",
        href: "/repiping-services",
        icon: <GitBranch className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
      },
      {
        title: "Water Heater Services",
        desc: "Repair, replacement, and installation of tank and tankless water heaters.",
        href: "/water-heater-services",
        icon: <Flame className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
      },
      {
        title: "Water Treatment",
        desc: "Softeners, reverse osmosis, and whole-home filtration systems for Utah's hard water.",
        href: "/water-treatment-services",
        icon: <Filter className="w-5 h-5" />,
        image:
          "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80",
      },
    ],
  },
];

const whyUs = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Licensed & Insured",
    desc: "Fully licensed HVAC and plumbing contractors with proper liability coverage and workers' compensation.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "5-Star Rated",
    desc: "Hundreds of verified reviews from homeowners across Salt Lake and Davis County.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Emergency Service",
    desc: "HVAC failures and plumbing emergencies don't keep business hours — neither do we.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "NATE Certified",
    desc: "Our technicians hold NATE certification, the gold standard of HVAC knowledge and skill.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="CMB HVAC team at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0D2E47]/96 via-[#133F60]/88 to-[#133F60]/45" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="badge badge-white mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              CMB HVAC &amp; Plumbing · Salt Lake &amp; Davis County
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              All Services — Heating, Cooling &amp; Plumbing
            </h1>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              One call covers it all. CMB delivers fast, honest, and guaranteed
              HVAC and plumbing services across the Wasatch Front — licensed
              technicians, upfront pricing, no surprises.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
              {[
                "Licensed & Insured",
                "Same-Day Available",
                "Upfront Pricing",
                "Satisfaction Guaranteed",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DB5425]" /> {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/schedule-us" className="btn-primary">
                Book an Appointment
              </Link>
              <a href="tel:3858656749" className="btn-outline-white">
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTIONS */}
      {services.map((group) => (
        <section
          key={group.category}
          className="py-20 md:py-28 even:bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow={group.category}
              title={
                group.category === "Heating & Cooling"
                  ? "Keep Your Home at the Perfect Temperature"
                  : "Reliable Plumbing for Every Need"
              }
              description={
                group.category === "Heating & Cooling"
                  ? "We install, repair, and maintain all major HVAC brands. NATE-certified technicians, same-day availability, and industry-best warranties."
                  : "From a dripping faucet to a full repipe, our licensed plumbers handle every job with speed, care, and transparent pricing."
              }
              centered
            />
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${group.items.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 max-w-4xl mx-auto"} gap-8 mt-12`}
            >
              {group.items.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card group overflow-hidden p-0"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className={`icon-box mb-3 ${group.color}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    <span className="btn-ghost text-sm inline-flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* WHY CHOOSE CMB */}
      <section
        className="section-dark py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #0D2E47 0%, #133F60 55%, #1A5280 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why CMB"
            title="The Standard for HVAC & Plumbing in Utah"
            description="We built CMB on a simple promise: great service, honest prices, and results you can trust. That's why thousands of Utah homeowners call us first."
            centered
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {whyUs.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PROMO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gray-50 border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <p className="text-[#DB5425] text-xs font-bold uppercase tracking-widest mb-3">
                  Membership Program
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Save All Year with a CMB Membership
                </h2>
                <p className="text-gray-600 mb-6">
                  Join our annual membership program and enjoy 15% off all
                  repairs, bi-annual check-ups, priority scheduling, and 24/7
                  emergency support — starting at just $179/year.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "15% off all service calls & repairs",
                    "Bi-annual HVAC check-ups included",
                    "Priority same-day scheduling",
                    "No emergency surcharge — ever",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-[#DB5425] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href="/membership" className="btn-primary">
                    View Membership Plans
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:3858656749" className="btn-secondary">
                    <Phone className="w-4 h-4" />
                    Call to Enroll
                  </a>
                </div>
              </div>
              <div className="relative min-h-64 lg:min-h-0">
                <Image
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
                  alt="CMB membership benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        eyebrow="Ready to Get Started?"
        title="Schedule Your Service Today"
        description="Our expert technicians are ready to help — same-day appointments available. Fast diagnosis, fixed pricing, satisfaction guaranteed."
        primaryText="Book an Appointment"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
      />

      <Footer />
    </>
  );
}
