import type { ReactNode } from 'react';

export interface TechToolItem {
  id: string;
  name: string;
  role: string;
  icon: ReactNode;
}

export const TECH_TOOLS: TechToolItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    role: 'Semantic Structure',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <path d="M6 4H30L27.8 28.4L18 32L8.2 28.4L6 4Z" fill="#E34F26" />
        <path d="M18 6V29.8L25.9 27L27.8 6H18Z" fill="#EF652A" />
        <path
          d="M11 10.5H25L24.6 14H14.6L14.9 17.5H24.3L23.5 25.5L18 27.3L12.5 25.5L12.1 21H15.6L15.8 23L18 23.7L20.2 23L20.5 20H11.8L11 10.5Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'css3',
    name: 'CSS3',
    role: 'Responsive Layouts',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <path d="M6 4H30L27.8 28.4L18 32L8.2 28.4L6 4Z" fill="#1572B6" />
        <path d="M18 6V29.8L25.9 27L27.8 6H18Z" fill="#33A9DC" />
        <path
          d="M11 10.5H25L24.6 14H14.6L14.9 17.3H24.3L23.5 25.5L18 27.3L12.5 25.5L12.1 21H15.6L15.8 23L18 23.7L20.2 23L20.5 20H12L11.6 16.8H20.8L21.1 14H11.3L11 10.5Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    role: 'Interactive Logic',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <rect x="4" y="4" width="28" height="28" rx="4" fill="#F7DF1E" />
        <path
          d="M15.8 24.5C15.8 26.8 14.5 27.9 12.6 27.9C11.1 27.9 10.1 27.1 9.6 26L11.5 24.8C11.8 25.4 12.2 25.8 12.7 25.8C13.3 25.8 13.7 25.4 13.7 24.3V17H15.8V24.5ZM21.7 28C19.6 28 18.2 26.9 17.6 25.6L19.5 24.4C20 25.2 20.6 25.8 21.7 25.8C22.6 25.8 23.2 25.3 23.2 24.6C23.2 23.8 22.6 23.5 21.3 22.9L20.7 22.6C18.9 21.8 17.9 20.8 17.9 18.9C17.9 17.1 19.3 15.8 21.4 15.8C22.9 15.8 24 16.4 24.7 17.6L22.9 18.8C22.5 18.1 22.1 17.8 21.4 17.8C20.7 17.8 20.2 18.2 20.2 18.8C20.2 19.5 20.7 19.8 21.9 20.3L22.5 20.6C24.6 21.5 25.6 22.4 25.6 24.5C25.6 26.7 23.9 28 21.7 28Z"
          fill="#0F172A"
        />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    role: 'Modern Web Apps',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <circle cx="18" cy="18" r="2.6" fill="#22D3EE" />
        <ellipse cx="18" cy="18" rx="13" ry="5" stroke="#22D3EE" strokeWidth="1.5" />
        <ellipse
          cx="18"
          cy="18"
          rx="13"
          ry="5"
          transform="rotate(60 18 18)"
          stroke="#22D3EE"
          strokeWidth="1.5"
        />
        <ellipse
          cx="18"
          cy="18"
          rx="13"
          ry="5"
          transform="rotate(120 18 18)"
          stroke="#22D3EE"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    role: 'Custom Store & CMS',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <circle cx="18" cy="18" r="14" fill="#21759B" stroke="#7DD3FC" strokeWidth="1.2" />
        <circle cx="18" cy="18" r="11" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" />
        <path
          d="M10.5 14.5H13.6L16.2 22.8L18.4 15.8L20.6 22.8L23.2 14.5H25.5"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'php',
    name: 'PHP',
    role: 'Backend & APIs',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <ellipse cx="18" cy="18" rx="15" ry="9.5" fill="#777BB4" stroke="#A5B4FC" strokeWidth="1.2" />
        <text
          x="18"
          y="21.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10.5"
          fontWeight="700"
          fontFamily="monospace"
        >
          php
        </text>
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    role: 'AI & Automation',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <path
          d="M17.8 5C12.8 5 13.2 7.2 13.2 7.2V9.8H18V10.8H10.7C10.7 10.8 7 10.4 7 15.6C7 20.8 10.2 20.6 10.2 20.6H12.2V18C12.2 18 12.1 14.8 15.3 14.8H20.4C20.4 14.8 23.2 14.8 23.2 12V7.8C23.2 7.8 23.6 5 17.8 5ZM15.2 7.1C15.8 7.1 16.2 7.6 16.2 8.1C16.2 8.7 15.8 9.1 15.2 9.1C14.6 9.1 14.2 8.7 14.2 8.1C14.2 7.6 14.6 7.1 15.2 7.1Z"
          fill="#3776AB"
        />
        <path
          d="M18.2 31C23.2 31 22.8 28.8 22.8 28.8V26.2H18V25.2H25.3C25.3 25.2 29 25.6 29 20.4C29 15.2 25.8 15.4 25.8 15.4H23.8V18C23.8 18 23.9 21.2 20.7 21.2H15.6C15.6 21.2 12.8 21.2 12.8 24V28.2C12.8 28.2 12.4 31 18.2 31ZM20.8 28.9C20.2 28.9 19.8 28.4 19.8 27.9C19.8 27.3 20.2 26.9 20.8 26.9C21.4 26.9 21.8 27.3 21.8 27.9C21.8 28.4 21.4 28.9 20.8 28.9Z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: 'java',
    name: 'Java',
    role: 'Enterprise Systems',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <rect x="4" y="4" width="28" height="28" rx="6" fill="#0F172A" stroke="#F97316" strokeWidth="1.4" />
        <path
          d="M12 19.5H23.5V22C23.5 24.5 21 26.5 17.75 26.5C14.5 26.5 12 24.5 12 22V19.5Z"
          stroke="#38BDF8"
          strokeWidth="1.8"
        />
        <path d="M23.5 20.2H25C26 20.2 26.5 20.9 26.5 21.8C26.5 22.7 25.8 23.3 24.8 23.3H23.5" stroke="#38BDF8" strokeWidth="1.6" />
        <path
          d="M15.5 16.5C14.5 14.8 17 13.5 16 11.2M19.5 16.5C18.5 14.8 21 13.5 20 11.2"
          stroke="#F97316"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M11.5 28.5H24.5" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    role: 'Type-Safe Code',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <rect x="4" y="4" width="28" height="28" rx="4" fill="#3178C6" />
        <text
          x="19.5"
          y="26.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="13.5"
          fontWeight="700"
          fontFamily="sans-serif"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    role: 'Design Systems',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <path
          d="M18 10C13.8 10 11.2 12.1 10.2 16.2C11.7 14.1 13.5 13.3 15.6 13.8C16.8 14.1 17.6 15 18.6 16C20.1 17.5 21.8 19.3 25.8 19.3C30 19.3 32.6 17.2 33.6 13.1C32.1 15.2 30.3 16 28.2 15.5C27 15.2 26.2 14.3 25.2 13.3C23.7 11.8 22 10 18 10ZM10.2 19.3C6 19.3 3.4 21.4 2.4 25.5C3.9 23.4 5.7 22.6 7.8 23.1C9 23.4 9.8 24.3 10.8 25.3C12.3 26.8 14 28.6 18 28.6C22.2 28.6 24.8 26.5 25.8 22.4C24.3 24.5 22.5 25.3 20.4 24.8C19.2 24.5 18.4 23.6 17.4 22.6C15.9 21.1 14.2 19.3 10.2 19.3Z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    role: 'Fast Servers',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <path
          d="M18 4L30 10.8V24.4L18 31.2L6 24.4V10.8L18 4Z"
          fill="#062016"
          stroke="#22C55E"
          strokeWidth="1.6"
        />
        <text
          x="18"
          y="21"
          textAnchor="middle"
          fill="#4ADE80"
          fontSize="10"
          fontWeight="700"
          fontFamily="monospace"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    id: 'ai-chatbots',
    name: 'AI & Chatbots',
    role: 'Smart Workflows',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
        <rect
          x="5"
          y="7"
          width="26"
          height="22"
          rx="6"
          fill="#07152E"
          stroke="#22D3EE"
          strokeWidth="1.6"
        />
        <circle cx="13.5" cy="17.5" r="2" fill="#22D3EE" />
        <circle cx="22.5" cy="17.5" r="2" fill="#22D3EE" />
        <path
          d="M14 22.5C15.2 23.7 20.8 23.7 22 22.5"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M18 3.5V7" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];
