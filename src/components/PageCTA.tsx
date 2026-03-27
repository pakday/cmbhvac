import Link from "next/link";

interface PageCTAProps {
  eyebrow?: string;
  message: React.ReactNode;
  buttonText: string;
  buttonHref: string;
}

export function PageCTA({
  eyebrow,
  message,
  buttonText,
  buttonHref,
}: PageCTAProps) {
  return (
    <div className="page-cta px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center sm:text-left">
          {eyebrow && (
            <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest mb-2">
              {eyebrow}
            </p>
          )}
          <p className="text-white font-black text-2xl md:text-3xl leading-snug">
            {message}
          </p>
        </div>
        <Link
          href={buttonHref}
          className="btn-primary shrink-0 btn-lg"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
