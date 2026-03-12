import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export default function SchedulePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-28 md:pt-40 md:pb-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-banner-schdule-us.jpg"
            alt="Book an Appointment with CMB HVAC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/75" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="heading-xl font-bold leading-tight mb-6">
              Book Your Appointment with Our Expert HVAC Techs Below
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-m font-bold mb-4">
            Get Your HVAC System taken care of Today
          </h2>
          <p className="text-2xl font-semibold mb-4">
            Call{" "}
            <a href="tel:3858656749" className="text-accent underline">
              385-865-6749
            </a>
          </p>
          <a
            href="tel:3858656749"
            className="btn-primary text-lg py-3 px-8 mb-6 inline-flex"
          >
            Click to Call Us
          </a>
          <p className="text-xl font-semibold mt-4">
            Don&apos;t Wait for your Free Service Call!
          </p>
        </div>
      </section>

      {/* CONNECT WITH US */}
      <section className="bg-muted py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-m font-bold mb-10 text-center">
            Connect With Us For Your Free In-home Consultation!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:3858656749"
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <div className="icon-box icon-box-lg mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Phone
              </p>
              <p className="font-bold text-lg">(385) 865-6749</p>
            </a>

            <a
              href="mailto:team@cmbhvac.com"
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <div className="icon-box icon-box-lg mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Email
              </p>
              <p className="font-bold text-lg">team@cmbhvac.com</p>
            </a>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card">
              <div className="icon-box icon-box-lg mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Service Area
              </p>
              <p className="font-bold text-lg">Wasatch Front</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
