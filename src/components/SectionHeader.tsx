import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`eyebrow ${light ? "text-accent-light!" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
