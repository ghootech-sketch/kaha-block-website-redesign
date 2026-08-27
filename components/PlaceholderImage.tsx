import React from 'react';

interface Props {
  text: string;
  className?: string;
}

export default function PlaceholderImage({ text, className = '' }: Props) {
  return (
    <div className={`flex items-center justify-center bg-gray-200 text-gray-500 font-medium ${className}`}>
      <span className="text-sm md:text-base text-center px-4">{text}</span>
    </div>
  );
}
