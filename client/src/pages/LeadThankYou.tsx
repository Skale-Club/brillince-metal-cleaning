import { Link } from "wouter";
import { useEffect } from "react";
import { ChevronDown, Home } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { CompanySettings } from "@shared/schema";
import Lottie from "lottie-react";
import successAnimation from "../assets/success-animation.json";
import { trackEvent } from "@/lib/analytics";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/ui/error-state";

const SUCCESS_ANIMATION_GREEN = "[0,0.788000009574,0.294000004787,1]";

function hexToLottieColor(hex: string) {
  const normalized = hex.trim().replace("#", "");
  const expanded =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    return SUCCESS_ANIMATION_GREEN;
  }

  const channels = [0, 2, 4].map((start) => {
    const value = Number.parseInt(expanded.slice(start, start + 2), 16) / 255;
    return Number(value.toFixed(12)).toString();
  });

  return `[${channels.join(",")},1]`;
}

function tintSuccessAnimation(hex: string) {
  return JSON.parse(
    JSON.stringify(successAnimation).replace(
      SUCCESS_ANIMATION_GREEN,
      hexToLottieColor(hex),
    ),
  ) as typeof successAnimation;
}

export default function LeadThankYou() {
  const { data: companySettings, isLoading, isError, refetch } = useQuery<CompanySettings>({
    queryKey: ["/api/company-settings"],
  });

  useEffect(() => {
    trackEvent("generate_lead", {
      location: "/thankyou",
      label: "thank_you_page",
      category: "lead_generation",
    });
  }, []);

  const companyName = companySettings?.companyName?.trim() || "";
  const headline = `Thanks for contacting ${companyName}.`;
  const successAnimationGold = tintSuccessAnimation(
    companySettings?.websiteSecondaryColor || "#EACF62",
  );

  const heroGradient = `
    linear-gradient(
      to right bottom,
      #09152d,
      #0b152a,
      #0d1427,
      #0f1424,
      #101421,
      #121622,
      #151723,
      #171924,
      #1c1c29,
      #21202e,
      #262332,
      #2c2637
    )
  `;

  if (isLoading) {
    return (
      <div
        className="w-full text-white overflow-hidden flex items-start py-16"
        style={{ background: heroGradient }}
      >
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 space-y-4">
            <Skeleton className="h-16 w-16 rounded-full bg-white/10" />
            <Skeleton className="h-10 w-3/4 bg-white/10" />
            <Skeleton className="h-6 w-full bg-white/10" />
            <Skeleton className="h-12 w-48 bg-white/10 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="w-full text-white overflow-hidden flex items-start py-16"
        style={{ background: heroGradient }}
      >
        <div className="max-w-5xl mx-auto px-4 w-full">
          <ErrorState
            title="Failed to load page"
            message="We couldn't load the page content. Please try again."
            onRetry={() => refetch()}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full text-white overflow-hidden flex items-start py-16"
      style={{ background: heroGradient }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-start">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0">
                <Lottie
                  animationData={successAnimationGold}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="website-cta-soft-dark inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold">
                Request received
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">{headline}</h1>
            <p className="mt-4 text-slate-200 text-lg leading-relaxed">
              Your request was submitted successfully. A project specialist will review your details and contact you shortly.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <Link href="/" className="inline-flex">
                <button className="website-cta min-w-[220px] rounded-xl px-6 py-4 hover:-translate-y-0.5">
                  <Home className="w-4 h-4" />
                  Back to website
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 shadow-2xl backdrop-blur">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgb(var(--website-cta-bg-rgb)), transparent 35%), radial-gradient(circle at 80% 0%, rgb(var(--website-cta-bg-rgb) / 0.55), transparent 30%), radial-gradient(circle at 50% 80%, rgb(var(--website-cta-bg-rgb) / 0.38), transparent 25%)",
                }}
              />
              <div className="relative space-y-4">
                <p className="text-sm text-slate-200/90">What happens next</p>
                <div className="space-y-1 text-sm text-white/90">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3">
                    <span className="website-cta-soft-dark flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold">1</span>
                    <span>We review your project scope, goals, and priorities.</span>
                  </div>
                  <div className="flex justify-center -my-0.5">
                    <div className="inline-flex h-4 w-4 items-center justify-center" style={{ color: "rgb(var(--website-cta-bg-rgb) / 0.7)" }}>
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3">
                    <span className="website-cta-soft-dark flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold">2</span>
                    <span>We contact you to confirm details and schedule the next step.</span>
                  </div>
                  <div className="flex justify-center -my-0.5">
                    <div className="inline-flex h-4 w-4 items-center justify-center" style={{ color: "rgb(var(--website-cta-bg-rgb) / 0.7)" }}>
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3">
                    <span className="website-cta-soft-dark flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold">3</span>
                    <span>You receive an estimate, expected timeline, and clear recommendations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
