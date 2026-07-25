import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Renders an image, but if the file isn't there yet (e.g. you haven't
 * dropped your real photo into /public/assets/... yet) it shows a
 * clean placeholder instead of a broken-image icon.
 *
 * Once you add the real file at the same path, it displays automatically —
 * no code changes needed.
 */
export default function SmartImage({ src, alt, className = "" }: SmartImageProps) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className={`img-placeholder ${className}`} title={`Add image at: ${src}`}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setBroken(true)}
      loading="lazy"
    />
  );
}
