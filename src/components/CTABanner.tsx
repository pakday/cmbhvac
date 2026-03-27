import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  eyebrow?: string;
  icon?: React.ReactNode;
}

export function CTABanner({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  eyebrow,
  icon,
}: CTABannerProps) {
  return (
    <section className="cta-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left: Text */}
          <div className="max-w-xl">
            {eyebrow && (
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
              {title}
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:shrink-0">
            <Link
              href={primaryHref}
              className="btn-primary inline-flex items-center justify-center gap-2 text-base btn-lg"
            >
              {primaryText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="btn-outline-white inline-flex items-center justify-center gap-2 text-base btn-lg"
              >
                {icon ?? <Phone className="w-4 h-4" />}
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
