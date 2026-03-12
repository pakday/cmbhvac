"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { CheckCircle, Phone, Package, ArrowRight } from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */

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

const PRODUCTS = [
  {
    brand: "Amana",
    image: "https://cmbhvac.com/wp-content/uploads/2023/06/img-amn-asx14.png",
    imageAlt: "Amana air conditioning outdoor unit",
    imageBg: "bg-white",
    overview:
      "The Amana brand has a rich history of creating appliances that changed the American household. When it comes to hassle-free indoor living, our customers always come first.",
    commitments: [
      "Innovative engineering",
      "World-class manufacturing processes",
      "Relentless drive",
      "Ten-year parts warranty",
    ],
    quickFacts: [
      "1st cold storage locker",
      "1st nationally marketed upright freezer for home use",
      "1st side-by-side refrigerator",
      "1st portable counter-top microwave oven",
    ],
  },
  {
    brand: "Amana 2 Ton 16 Seer AC & 60K 96% Gas System",
    image: "https://cmbhvac.com/wp-content/uploads/2023/06/amn-90-upflw.png",
    imageAlt: "Amana brand furnace for heating and air conditioning",
    imageBg: "bg-white",
    overview:
      "The Amana brand has a rich history of creating appliances that changed the American household. That is why we are excited to be a part of the local HVAC professionals that distinguish ourselves as Local Amana Dealers.",
    commitments: null,
    quickFacts: [
      "Engineered Longevity",
      "Low sound output",
      "Quiet, Two-Speed, Induced-Draft Blower",
    ],
  },
  {
    brand: "American Pride",
    image: "https://cmbhvac.com/wp-content/uploads/2023/06/amn_avpec_web.png",
    imageAlt: "High-efficiency Armstrong gas furnace",
    imageBg: "bg-white",
    overview:
      "The parent company behind Amana brand heating and air conditioning equipment is consolidating its manufacturing and logistics footprint to a new $400 million facility located outside of Houston, TX.",
    commitments: null,
    quickFacts: [
      "Logical arrangement of equipment and material flow",
      "High-speed manufacturing",
      "The centralization of all internal departments",
      "4.2 million square feet of operational space",
    ],
  },
  {
    brand: "Goodman 2 Ton 14 Seer AC & 60K 80% Gas System",
    image:
      "https://cmbhvac.com/wp-content/uploads/2023/06/Goodman_product1.jpg",
    imageAlt: "Goodman furnace isolated on white background",
    imageBg: "bg-white",
    overview:
      "The Goodman brand has been focused on providing efficiency and comfort where it matters most while still being an inexpensive brand. With its superior components and standard efficiency, Goodman brand HVACs are a popular choice for homeowners around the United States.",
    commitments: null,
    quickFacts: [
      "Ideal size to cover a small house in ideal climates",
      "Low sound output",
      "Factory-installed filter drier",
    ],
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-primary-dark">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2023/06/CMB_HVAC_inner_Banner03.jpg"
            alt="Quality HVAC Products"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-7">
              <Package className="w-3.5 h-3.5 text-accent" />
              Quality HVAC Products
            </div>

            <h1 className="heading-2xl font-black text-white leading-[1.05] mb-5">
              Your Furnace and AC never choose
              <br />
              <span className="text-accent">a good time to go out on you.</span>
            </h1>

            <p className="text-lg text-primary-foreground/75 leading-relaxed mb-10">
              Not to worry — we work with a variety of products and are here to
              help you make the right decision for your home.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base py-3.5 px-8"
              >
                Book Appointment Here
              </Link>
              <a
                href="tel:3858656749"
                className="btn-outline-white text-base py-3.5 px-8"
              >
                <Phone className="w-4 h-4" />
                (385) 865-6749
              </a>
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
                className="flex flex-col items-center justify-center gap-3 py-8 px-4"
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
          PRODUCTS
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="eyebrow">Our Products</span>
            <h2 className="heading-xl font-black tracking-tight leading-tight mb-4">
              Brands We Work With
            </h2>
            <p className="text-muted-foreground text-lg">
              We partner with industry-leading brands to bring you high-quality
              heating and cooling equipment — backed by the best warranties and
              our own workmanship guarantee.
            </p>
          </div>

          {/* Product rows */}
          <div className="space-y-24">
            {PRODUCTS.map((p, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 bg-white rounded-3xl border border-border/50 shadow-sm flex items-center justify-center p-12 min-h-96">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    width={500}
                    height={400}
                    className="object-contain w-full h-auto"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2">
                  <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest mb-5">
                    {p.brand}
                  </span>

                  <p className="text-foreground text-lg leading-relaxed mb-6">
                    {p.overview}
                  </p>

                  {p.commitments && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-foreground mb-3">
                        We are committed to:
                      </p>
                      <ul className="space-y-2">
                        {p.commitments.map((c) => (
                          <li
                            key={c}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-8">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Quick Facts:
                    </p>
                    <ul className="space-y-2">
                      {p.quickFacts.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="btn-primary">
                    Book an Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Product Is Right for You?"
        description="Our comfort designers will walk you through every option — no pressure, just honest advice. Serving Salt Lake City & Northern Utah."
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
