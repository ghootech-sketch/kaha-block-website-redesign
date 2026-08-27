import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  text: string;
  className?: string;
  ariaLabel?: string;
}

export default function PlaceholderImage({
  text,
  className = "",
  ariaLabel,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel || text}
      className={`flex flex-col items-center justify-center bg-gray-100 text-gray-400 select-none ${className}`}
    >
      <ImageIcon className="w-8 h-8 opacity-40 mb-2 flex-shrink-0" aria-hidden="true" />
      <span className="text-xs md:text-sm text-center px-4 font-medium text-gray-500 max-w-xs">
        {text}
      </span>
    </div>
  );
}
