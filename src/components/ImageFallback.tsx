"use client";

import React, { useState } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  fallback?: React.ReactNode;
};

export default function ImageFallback({ src, alt = "", className = "", fallback = null }: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return fallback ? <>{fallback}</> : null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setVisible(false)}
    />
  );
}
