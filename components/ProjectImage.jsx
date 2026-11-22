"use client";

import { useState } from "react";

const FALLBACK_IMAGE = "/images/project-image-fallback.svg";

export default function ProjectImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
}) {
  const [imageSrc, setImageSrc] = useState(src || FALLBACK_IMAGE);

  return (
    <img
      src={imageSrc}
      alt={alt || "ROVOR architectural visual study"}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      sizes={sizes}
      onError={() => {
        if (imageSrc !== FALLBACK_IMAGE) setImageSrc(FALLBACK_IMAGE);
      }}
    />
  );
}
