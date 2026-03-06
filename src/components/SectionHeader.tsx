import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
