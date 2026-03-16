"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function MembershipPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-32 pb-20 bg-linear-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Membership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our CMB HVAC Maintenance Membership
            </h1>
            <p className="text-xl text-muted-foreground">
              Save on maintenance, get priority service, and extend the life of
              your HVAC system with our exclusive membership program.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Your HVAC system is essential to keeping your home comfortable, but
            without regular maintenance, it can easily fall into disrepair. Many
            homeowners don&apos;t realize the importance of preventative care
            until it&apos;s too late, leading to expensive repairs or even
            complete system replacements. That&apos;s where our HVAC Maintenance
            Membership Program comes in.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            We want your system to last as long as it can. Our membership plan
            is designed to take the stress out of HVAC maintenance by providing
            you with scheduled check-ups, priority service, and discounts on
            repairs and new equipment. Not only does this program help keep your
            system running smoothly, but it also saves you money in the long run
            by preventing costly breakdowns and improving your system&apos;s
            efficiency.
          </p>

          <h2 className="heading-m font-bold mt-12 mb-2">
            Save On Your Maintenance Costs Every Year
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Find Out what you get with CMB HVAC&apos;s Program
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-muted py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Image
              src="https://cmbhvac.com/wp-content/uploads/2024/06/cmb-hvac-banner-schdule-us.jpg"
              alt="Bosch HVAC units certified by Utah's Local HVAC"
              width={900}
              height={400}
              className="rounded-2xl w-full object-cover"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Bosch HVAC units certified by Utah&apos;s Local HVAC.
            </p>
          </div>

          <h2 className="heading-m font-bold mb-8">
            What&apos;s Included in Our CMB HVAC Maintenance Membership?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                Bi-Annual System Check-Ups
              </h3>
              <p className="text-foreground ml-7">
                We&apos;ll schedule two maintenance visits per year, during
                which our technicians will thoroughly inspect, clean, and tune
                your HVAC system to ensure optimal performance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                Exclusive Member Promotions
              </h3>
              <p className="text-foreground ml-7">
                We occasionally get certain deals from our suppliers with
                maintenance items and get those savings over to our members. For
                instance, keeping filters clean is essential to maintaining good
                indoor air quality and ensuring efficient system operation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                24 Hour Emergency Service
              </h3>
              <p className="text-foreground ml-7">
                We do not anticipate that any emergencies may arise, with the
                quality of our equipment, however, for our members, we have this
                for future maintenance or repairs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                Priority Scheduling
              </h3>
              <p className="text-foreground ml-7">
                HVAC emergencies can&apos;t wait, and with our membership
                program, they won&apos;t have to. Enjoy top priority when
                scheduling service calls.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                Discounted Repairs and Equipment of 15%
              </h3>
              <p className="text-foreground ml-7">
                Members receive a discount on any necessary repairs, parts, and
                even on new HVAC systems should you decide to upgrade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YOU NEED */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Image
              src="https://cmbhvac.com/wp-content/uploads/2024/09/membership-mid.jpg"
              alt="HVAC service vans parked outside a residential building"
              width={900}
              height={400}
              className="rounded-2xl w-full object-cover"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              HVAC service vans parked outside a residential building.
            </p>
          </div>

          <h2 className="heading-m font-bold mb-8">
            Why You Need an HVAC Maintenance Membership
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">
                1. Prevent Costly Breakdowns
              </h3>
              <p className="text-foreground">
                Regular maintenance ensures that small issues are caught before
                they become major problems. By signing up for our HVAC
                Maintenance Membership, you&apos;re investing in the longevity
                of your system. Our trained technicians will inspect, clean, and
                tune up your system to ensure it&apos;s operating efficiently,
                minimizing the chances of unexpected failures.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                2. Improved Energy Efficiency
              </h3>
              <p className="text-foreground">
                A well-maintained HVAC system doesn&apos;t have to work as hard
                to maintain your desired indoor temperature. This translates
                into lower energy bills. When you join our membership program,
                you ensure that your system is always operating at peak
                performance, saving you money on utilities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">3. Priority Service</h3>
              <p className="text-foreground">
                As a member, you&apos;ll receive priority scheduling for all
                service requests. When your system needs attention, you
                won&apos;t have to wait in line. Our team of skilled technicians
                will respond quickly to your needs, ensuring that any issues are
                resolved promptly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">4. Exclusive Discounts</h3>
              <p className="text-foreground">
                Members of our HVAC Maintenance Program enjoy exclusive savings
                on repairs and new installations. Whether you need a minor fix
                or are ready to upgrade your system, our membership plan ensures
                that you get the best deals available.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                5. Extend the Lifespan of Your HVAC System
              </h3>
              <p className="text-foreground">
                With regular maintenance, your HVAC system will last longer,
                reducing the need for early replacements. Our technicians will
                help identify any components that may be wearing out and replace
                them before they cause a bigger issue, giving your system a
                longer, more efficient life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="bg-muted py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-m font-bold mb-6">How to Get Started</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Joining CMB HVAC&apos;s Maintenance Membership Program is simple.
            Just give us a call or sign up online, and we&apos;ll schedule your
            first service appointment at your convenience. With our affordable
            membership options, maintaining your HVAC system has never been
            easier.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Gain the Peace of Mind that you have it covered — take control of
            your home&apos;s comfort and energy efficiency by enrolling in our
            HVAC Maintenance Membership Program today.
          </p>
        </div>
      </section>

      {/* CONNECT WITH US */}
      <section className="py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-m font-bold mb-10 text-center">
            Connect With Us to Sign Up for the Membership!
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

      {/* GOOGLE MAP */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://maps.google.com/maps?q=CMB+HVAC+Salt+Lake+City+UT&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CMB HVAC Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
