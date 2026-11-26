import { useState } from 'react';
import { resolveAssetUrl } from '../utils/assets';

/**
 * Brand logo featuring the founder's studio portrait badge with a crisp </> vector fallback.
 */
export function BrandLogo({ className = 'h-9 w-9' }: { className?: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const portraitSrc = resolveAssetUrl(
    '/assets/aistudio/Web_Development_Studio_Portrait_06a0eb80.png'
  );

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-cyan-400/60 bg-[#071226] ${className}`}
    >
      {!imgFailed ? (
        <img
          src={portraitSrc}
          alt="Web Development brand logo portrait"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="h-full w-full object-cover object-[66%_18%] scale-125"
        />
      ) : (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full p-1.5"
          aria-hidden="true"
        >
          <path
            d="M12.5 13L7.5 18L12.5 23M23.5 13L28.5 18L23.5 23M20 11L16 25"
            stroke="#22D3EE"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

/**
 * Clean vector crest inspired by the Nayab Jewellery reference logo in Project 2.
 */
export function NayabJewelleryCrest({ className = 'h-9 w-auto' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <circle cx="22" cy="22" r="19" fill="#09090B" stroke="#D4AF37" strokeWidth="1.5" />
        <circle
          cx="22"
          cy="22"
          r="15.5"
          stroke="#F3D97E"
          strokeWidth="1"
          strokeDasharray="2.5 2.5"
        />
        <path
          d="M15 24.5C15 24.5 18 19.5 22 19.5C26 19.5 29 24.5 29 24.5"
          stroke="#EAB308"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="22" cy="15.5" r="1.4" fill="#FDE047" />
        <path d="M18.5 27.5H25.5" stroke="#D4AF37" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <div className="leading-none">
        <span className="block font-display text-xs font-semibold tracking-[0.22em] text-amber-300">
          NAYAB
        </span>
        <span className="mt-0.5 block text-[10px] tracking-[0.2em] text-amber-200/80">
          JEWELLERY
        </span>
      </div>
    </div>
  );
}
