import type { Highlight, Project } from "@/data/siteContent";

type HighlightIconProps = {
  kind: Highlight["id"];
};

export function HighlightIcon({ kind }: HighlightIconProps) {
  if (kind === "risk") {
    return (
      <svg viewBox="0 0 120 120" className="icon-graphic" aria-hidden="true">
        <defs>
          <linearGradient id="shieldGradient" x1="15" y1="15" x2="105" y2="105">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <path d="M60 12 95 24v28c0 27-14 44-35 56C39 96 25 79 25 52V24l35-12Z" fill="url(#shieldGradient)" />
        <rect x="42" y="38" width="36" height="28" rx="8" fill="white" opacity="0.95" />
        <path d="M60 46v12M50 58h20" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
        <path d="M36 78c6-7 14-11 24-11s18 4 24 11" stroke="#F97316" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "aigc") {
    return (
      <svg viewBox="0 0 120 120" className="icon-graphic" aria-hidden="true">
        <defs>
          <linearGradient id="paletteGradient" x1="18" y1="20" x2="100" y2="96">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path d="M60 18c25 0 42 16 42 38 0 20-14 34-32 34h-8c-4 0-6 2-6 6 0 8-5 12-12 12-19 0-34-19-34-43 0-26 20-47 50-47Z" fill="url(#paletteGradient)" />
        <circle cx="41" cy="45" r="6" fill="white" />
        <circle cx="58" cy="35" r="6" fill="#FDE68A" />
        <circle cx="76" cy="46" r="6" fill="#DBEAFE" />
        <path d="M76 69c0-6 5-11 11-11h9" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
        <path d="M82 62l8-8 10 10" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className="icon-graphic" aria-hidden="true">
      <defs>
        <linearGradient id="robotGradient" x1="16" y1="16" x2="100" y2="104">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <rect x="28" y="30" width="64" height="48" rx="18" fill="url(#robotGradient)" />
      <path d="M60 18v14" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" />
      <circle cx="46" cy="54" r="6" fill="white" />
      <circle cx="74" cy="54" r="6" fill="white" />
      <path d="M45 70c4 4 9 6 15 6s11-2 15-6" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M34 90h52" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
      <path d="M92 76l10-12 8 8-10 12" fill="#F97316" />
      <circle cx="101" cy="61" r="5" fill="#FDE68A" />
    </svg>
  );
}

type ProjectCoverProps = {
  cover: Project["cover"];
};

export function ProjectCover({ cover }: ProjectCoverProps) {
  if (cover === "multimodal") {
    return (
      <svg viewBox="0 0 320 220" className="cover-graphic" aria-hidden="true">
        <rect width="320" height="220" rx="28" fill="#F7F4FF" />
        <rect x="32" y="140" width="72" height="42" rx="16" fill="#DBEAFE" />
        <rect x="124" y="98" width="72" height="42" rx="16" fill="#FDE68A" />
        <rect x="216" y="56" width="72" height="42" rx="16" fill="#DDD6FE" />
        <path d="M104 161h20M196 119h20" stroke="#8B5CF6" strokeWidth="8" strokeLinecap="round" />
        <path d="M72 155c8-10 16-16 24-19M164 113c8-10 16-16 24-19" stroke="#6366F1" strokeWidth="5" strokeLinecap="round" />
        <path d="M46 162c18-8 28-12 44-10" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
        <path d="M142 121h36" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <path d="M230 79c10-8 22-12 37-11" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (cover === "workflow") {
    return (
      <svg viewBox="0 0 320 220" className="cover-graphic" aria-hidden="true">
        <rect width="320" height="220" rx="28" fill="#FFF8F2" />
        <path d="M78 40h164l-24 38H102L78 40Z" fill="#F97316" opacity="0.8" />
        <path d="M102 86h116l-18 34h-80l-18-34Z" fill="#FB7185" opacity="0.7" />
        <path d="M124 128h72l-12 28h-48l-12-28Z" fill="#8B5CF6" opacity="0.75" />
        <rect x="132" y="166" width="56" height="26" rx="13" fill="#6366F1" />
        <path d="M160 68v14M160 120v12M160 156v10" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (cover === "agent") {
    return (
      <svg viewBox="0 0 320 220" className="cover-graphic" aria-hidden="true">
        <rect width="320" height="220" rx="28" fill="#F8F4FF" />
        <rect x="30" y="92" width="74" height="40" rx="14" fill="#E0E7FF" />
        <polygon points="150,66 196,110 150,154 104,110" fill="#F97316" opacity="0.8" />
        <rect x="214" y="44" width="76" height="34" rx="14" fill="#DCFCE7" />
        <rect x="214" y="142" width="76" height="34" rx="14" fill="#DDD6FE" />
        <path d="M104 112h28M196 110h18M196 110h18" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />
        <path d="M232 78v46" stroke="#94A3B8" strokeWidth="4" strokeDasharray="6 6" />
        <circle cx="244" cy="78" r="8" fill="#F97316" />
        <circle cx="244" cy="142" r="8" fill="#8B5CF6" />
      </svg>
    );
  }

  if (cover === "huiwa") {
    return (
      <svg viewBox="0 0 320 220" className="cover-graphic" aria-hidden="true">
        <rect width="320" height="220" rx="28" fill="#FCFBFF" />
        <rect x="24" y="32" width="84" height="156" rx="20" fill="#EDE9FE" />
        <rect x="118" y="32" width="78" height="156" rx="20" fill="#FFF1E8" />
        <rect x="206" y="32" width="90" height="72" rx="20" fill="#F5D0FE" />
        <rect x="206" y="116" width="42" height="72" rx="20" fill="#DBEAFE" />
        <rect x="254" y="116" width="42" height="72" rx="20" fill="#FDE68A" />
        <path d="M42 58h48M42 80h32" stroke="#8B5CF6" strokeWidth="5" strokeLinecap="round" />
        <circle cx="157" cy="84" r="18" fill="#F97316" opacity="0.7" />
        <path d="M218 56h52M218 74h34" stroke="#EC4899" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 220" className="cover-graphic" aria-hidden="true">
      <rect width="320" height="220" rx="28" fill="#F8FAFC" />
      <path d="M42 158c30-40 54-58 74-58s39 22 58 22 31-16 56-56" stroke="#F97316" strokeWidth="8" strokeLinecap="round" />
      <path d="M42 178c28-28 56-44 92-44s52 12 74 12 42-16 70-52" stroke="#8B5CF6" strokeWidth="8" strokeLinecap="round" />
      <path d="M42 136c26-18 44-28 66-28 30 0 48 26 84 26 20 0 44-9 86-44" stroke="#22C55E" strokeWidth="8" strokeLinecap="round" />
      <circle cx="264" cy="82" r="12" fill="#F97316" />
      <circle cx="220" cy="102" r="10" fill="#8B5CF6" />
      <circle cx="182" cy="118" r="10" fill="#22C55E" />
    </svg>
  );
}
