import Link from "next/link";

interface CTABannerProps {
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  icon?: React.ReactNode;
}

export function CTABanner({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  icon,
}: CTABannerProps) {
  return (
    <section className="cta-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href={primaryHref} className="btn-primary">
            {primaryText}
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="btn-outline-white flex items-center gap-2"
            >
              {icon}
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
