import { useState } from 'react';
import { Monitor } from 'lucide-react';
import { resolveAssetUrl } from '../utils/assets';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export default function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Website Mockup Preview',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolveAssetUrl(src);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1226] via-[#0F1833] to-[#081024] p-6 text-center ${className}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-950/50 text-blue-400">
          <Monitor className="h-6 w-6" />
        </div>
        <p className="font-display text-sm font-semibold text-slate-200">{fallbackTitle}</p>
        <p className="mt-1 text-xs text-slate-400">Web Development Showcase</p>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
