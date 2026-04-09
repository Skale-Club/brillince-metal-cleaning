import { CheckCircle, Sparkles, ShieldCheck, Clock, Wrench, Award } from "lucide-react";
import type { HomepageContent } from "@shared/schema";
import defaultAboutImg from "@/assets/metal-cleaning-about.png";

interface AboutSectionProps {
  content?: HomepageContent['aboutSection'] | null;
  aboutImageUrl?: string | null;
}

const DEFAULT_HIGHLIGHTS = [
  {
    title: "Industrial-Grade Cleaning",
    description:
      "We use professional-strength solvents and ultrasonic equipment to remove grease, oxidation, rust, and contaminants from any metal surface.",
    icon: Wrench,
  },
  {
    title: "Certified & Insured Team",
    description:
      "Every technician is trained in safe chemical handling and workplace compliance so your facility and equipment are always protected.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Turnaround",
    description:
      "We respect your schedule. Most jobs are completed same-day or next-day so your operations face minimal downtime.",
    icon: Clock,
  },
  {
    title: "Guaranteed Results",
    description:
      "If you're not satisfied with the finish, we come back and make it right — no questions asked.",
    icon: Award,
  },
];

const STATS = [
  { value: "10+", label: "Years in Business" },
  { value: "500+", label: "Jobs Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24h", label: "Avg. Turnaround" },
];

export function AboutSection({ content, aboutImageUrl }: AboutSectionProps) {
  const label = content?.label || "About Us";
  const heading = content?.heading || "Brilliance in Every Surface We Touch";
  const description =
    content?.description ||
    "Brilliance Metal Cleaning is a specialized industrial cleaning company dedicated to restoring and maintaining metal surfaces to their peak condition. From stainless steel kitchen equipment to heavy machinery and structural metalwork, we deliver a level of cleanliness that extends equipment life, meets health codes, and keeps your business running at its best.";

  const highlights = content?.highlights?.length
    ? content.highlights.map((h, i) => ({
        ...h,
        icon: DEFAULT_HIGHLIGHTS[i % DEFAULT_HIGHLIGHTS.length].icon,
      }))
    : DEFAULT_HIGHLIGHTS;

  const imgSrc = aboutImageUrl || content?.defaultImageUrl || defaultAboutImg;

  return (
    <div className="container-custom mx-auto">
      {/* ── TOP ROW: image + text ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

        {/* IMAGE COLUMN */}
        <div className="order-1 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
            <img
              src={imgSrc}
              alt={heading}
              className="w-full h-auto object-contain object-top block"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary/10 -z-10" />
        </div>

        {/* TEXT COLUMN */}
        <div className="order-2 pb-8 lg:pb-0 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            {label}
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-[#1D1D1D] leading-tight font-display">
            {heading}
          </h2>

          <p className="text-slate-600 text-xl leading-relaxed">
            {description}
          </p>

          {/* Stats card — below description */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-4 sm:p-6 grid grid-cols-4 gap-x-4 gap-y-3 border border-slate-100">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary leading-none">{stat.value}</p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM ROW: highlights ── */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((highlight, index) => {
          const Icon = "icon" in highlight ? highlight.icon : CheckCircle;
          return (
            <div
              key={index}
              className="flex flex-col gap-3 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1D1D1D] text-sm mb-1">{highlight.title}</h4>
                <p className="text-slate-500 text-sm leading-snug">{highlight.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
