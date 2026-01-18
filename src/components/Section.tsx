import React from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  imageUrl: string;
  imageLeft?: boolean;
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;
}


export default function Section({
  id,
  title,
  subtitle,
  content,
  imageUrl,
  imageLeft = true,
  children,
  className = "",
  imageClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 ${className}`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row ${
          imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="md:w-3/5">
          <img
            src={imageUrl}
            alt={title}
            className={`w-full object-cover rounded-lg ${
              imageClassName ?? "h-96"
            }`}
          />
        </div>

        {/* Texte */}
        <div className="md:w-1/2 flex flex-col justify-center">
          {subtitle && (
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-olive">
              {subtitle}
            </h3>
          )}
          <h2 className="mb-4 text-3xl font-serif ">{title}</h2>
          <div className="mb-4 text-taupe leading-relaxed">{content}</div>
          {children}
        </div>
      </div>
    </section>
  );
}
