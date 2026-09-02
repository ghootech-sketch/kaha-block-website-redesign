import React from "react";
import Link from "next/link";

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Parses markdown-style links [Anchor Text](href) and bold text **bold**
 * into accessible React and Next.js Link components.
 */
export default function FormattedText({ text, className = "" }: FormattedTextProps) {
  // Regex to match [text](url) or **bold**
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Match [text](url)
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          const [, linkText, href] = linkMatch;
          const isInternal = href.startsWith("/") || href.startsWith("#");
          if (isInternal) {
            return (
              <Link
                key={index}
                href={href}
                className="text-primary hover:text-primary-hover underline underline-offset-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
              >
                {linkText}
              </Link>
            );
          }
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline underline-offset-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
            >
              {linkText}
            </a>
          );
        }

        // Match **bold**
        const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
        if (boldMatch) {
          return (
            <strong key={index} className="font-semibold text-slate-900">
              {boldMatch[1]}
            </strong>
          );
        }

        return part;
      })}
    </span>
  );
}
