"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { ContinuousSlider } from "@/components/ContinuousSlider";
import {
  ShieldCheck,
  Star,
  Award,
  Clock,
  HandCoins,
  Flame,
  Snowflake,
  Droplets,
  ArrowRight,
  Phone,
} from "lucide-react";
// no React hooks needed on homepage currently

export default function Home() {
  return (
    <>
      <Navbar />
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1800&q=80"
            alt="HVAC technician at work"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0D2E47]/95 via-[#133F60]/85 to-[#133F60]/40" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0D2E47]/60 via-transparent to-transparent" />

        {/* Accent blobs */}
        <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-[#DB5425] opacity-10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#1A5280] opacity-30 rounded-full blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div className="text-white">
              <div className="badge badge-white mb-5 text-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed &amp; Insured · 25+ Years Experience
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 tracking-tight">
                <span className="block font-extrabold">Utah&apos;s Most</span>
                <span className="block text-[#DB5425] font-extrabold">
                  Trusted
                </span>
                <span className="block font-extrabold">
                  HVAC &amp; Plumbing
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                From scorching Salt Lake summers to mountain-cold winters — we
                keep your home comfortable year-round. Fast, honest, done right.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/schedule-us"
                  className="btn-primary text-base py-3 px-7"
                >
                  Book Free Service Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:3858656749"
                  className="btn-outline-white text-base py-3 px-7"
                >
                  <Phone className="w-5 h-5" />
                  (385) 865-6749
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: <Star className="w-4 h-4 text-yellow-400" />,
                    text: "A+ BBB Rating",
                  },
                  {
                    icon: <Award className="w-4 h-4 text-blue-300" />,
                    text: "NATE Certified",
                  },
                  {
                    icon: <Clock className="w-4 h-4 text-green-400" />,
                    text: "24/7 Emergency",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90"
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                {
                  value: "25+",
                  label: "Years of Experience",
                  color: "border-blue-400/30",
                },
                {
                  value: "5,000+",
                  label: "Homes Serviced",
                  color: "border-[#DB5425]/30",
                },
                {
                  value: "4.9★",
                  label: "Average Google Rating",
                  color: "border-yellow-400/30",
                },
                {
                  value: "Free",
                  label: "Service Call Included",
                  color: "border-green-400/30",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white hover:bg-white/15 transition-colors"
                >
                  <div className="text-3xl font-extrabold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ═══ TRUST CARDS ═══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-orange-500" />,
                title: "Experienced",
                desc: "With over 20 years of experience in the HVAC industry, our team at CMB HVAC has the knowledge and expertise to handle all of your heating and cooling needs.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
                title: "Licensed",
                desc: "At CMB HVAC, we’re fully licensed and insured, so you can trust that our team of professionals will provide you with high-quality service and workmanship.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
                title: "Insured",
                desc: "At CMB HVAC, we’re fully insured to protect our clients and employees, giving you peace of mind when you choose us for your heating and cooling needs.",
              },
              {
                icon: <Award className="w-8 h-8 text-orange-500" />,
                title: "Certified",
                desc: "As a Certified Locally Owned and Operated company, we are your neighbors in our communities, ready to gain for you and your family the level of comfort your home needs.",
              },
            ].map((card, idx) => (
              <div key={idx} className="text-center">
                <div className="icon-box mx-auto mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══ ABOUT US ═══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <h3 className="text-xl font-semibold mb-4">
              We make sure your home stays cool and comfortable
            </h3>
            <p className="text-gray-700 mb-4">
              We’ll make sure your home stays cool and comfortable on even on
              the hottest days of the summer!
            </p>
            <p className="text-gray-700 mb-4">
              At CMB HVAC, we understand that installing or replacing an HVAC
              system can be a significant investment for homeowners. That’s why
              we’re committed to providing our customers with the information
              they need to make informed decisions about their heating and
              cooling needs.
            </p>
            <Link href="/schedule-us" className="btn-primary">
              Schedule Your Appointment Here
            </Link>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1590642915849-036cf529540b?w=800&q=80"
              alt="HVAC technician standing by company van outdoors"
              width={800}
              height={533}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      {/* ═══ SERVICE AREA SLIDER ═══ */}
      <ContinuousSlider
        cities={[
          "Clearfield",
          "Syracuse",
          "Kaysville",
          "Farmington",
          "Bountiful",
          "Layton",
          "Kearns",
          "Magna",
          "Taylorsville",
          "Holladay",
          "Riverton",
          "South Salt Lake",
          "Cottonwood Heights",
          "Herriman",
          "Midvale",
          "Millcreek",
          "Murray",
          "West Jordan",
          "West Valley City",
          "Salt Lake City",
          "West Point",
          "Fruit Heights",
          "W. Bountiful",
          "Centerville",
          "Woods Cross",
          "Clinton",
        ]}
      />
      {/* ═══ SERVICES ═══ */}{" "}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Complete Home Comfort Solutions"
            description="We're more than HVAC technicians — we are your neighbors offering great services at a fair price. Locally owned, A+ BBB rated, and trusted across Utah."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {/* Heating */}
            <Link href="/hvac" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
                  alt="Furnace heating system"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Heating Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Furnace repair, installation, and maintenance. High-efficiency
                systems sized for your home. 24/7 emergency heating available.
              </p>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* AC */}
            <Link href="/services/ac" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  // updated to a reliable Unsplash photo (same as AC services hero)
                  src="https://images.unsplash.com/photo-1647022528152-52ed9338611d?w=600&q=80"
                  alt="Air Conditioning unit"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Snowflake className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Air Conditioning</h3>
              <p className="text-gray-600 text-sm mb-4">
                AC repair, installation, and maintenance. Variable-speed
                systems, heat pumps, and ductless mini-splits for maximum
                efficiency.
              </p>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Plumbing */}
            <Link href="/plumbing" className="card group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"
                  alt="Plumbing services"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="icon-box mb-3">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">Plumbing Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Repairs, installations, repiping, water heaters, and water
                treatment. Fast, accurate service with transparent pricing.
              </p>
              <span className="btn-ghost text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* ═══ WHY CHOOSE ═══ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose CMB HVAC"
            title="We Treat Your Home Like Our Own"
            description="At CMB HVAC, we hire the best technicians and invest in training to keep up with industry innovations. Our goal with every call is to create a healthy home and happy customer."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "NATE-Certified Technicians",
                desc: "Who explain everything in plain language. Our team stays current on the latest systems and tools.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Fast Response & Emergency Service",
                desc: "On-time arrivals with 24/7 emergency availability — nights, weekends, and holidays.",
              },
              {
                icon: <HandCoins className="w-6 h-6" />,
                title: "Honest, Upfront Pricing",
                desc: "No hidden costs. No upsells. No surprises. We present fixed-price options and let you decide.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Satisfaction Guarantee",
                desc: "We back our workmanship completely. Respectful service from start to finish — we treat your home with care.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="icon-box-lg icon-box shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══ CTA ═══ */}
      <CTABanner
        title="Home of the Free Service Call"
        description="Don't wait — call or book online for your free in-home consultation. The best techs, the friendliest service, 100% satisfaction guaranteed."
        primaryText="Schedule Your Appointment"
        primaryHref="/schedule-us"
        secondaryText="Call (385) 865-6749"
        secondaryHref="tel:3858656749"
        icon={<Phone className="w-5 h-5" />}
      />
      <Footer />
    </>
  );
}
