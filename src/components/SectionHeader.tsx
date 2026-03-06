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
        <div className={`eyebrow ${light ? "text-[#E8632E]!" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${light ? "text-white/80" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
