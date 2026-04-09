import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { forwardRef, useMemo } from "react";
import type { CompanySettings, ServicePost } from "@shared/schema";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
  SiLinkedin,
  SiTiktok,
} from "react-icons/si";
import { getServicePostPath } from "@/lib/service-path";

const platformIcons: Record<string, any> = {
  facebook: SiFacebook,
  instagram: SiInstagram,
  twitter: SiX,
  x: SiX,
  youtube: SiYoutube,
  linkedin: SiLinkedin,
  tiktok: SiTiktok,
};

function extractIncludedServices(content?: string | null): string[] {
  if (!content) return [];

  try {
    const doc = new DOMParser().parseFromString(content, "text/html");
    const headings = Array.from(doc.querySelectorAll("h2, h3, h4"));
    const includedHeading = headings.find((heading) =>
      (heading.textContent || "").toLowerCase().includes("included services")
    );

    let list: HTMLUListElement | null = null;

    if (includedHeading) {
      let next = includedHeading.nextElementSibling;
      while (next) {
        const tag = next.tagName.toLowerCase();
        if (tag === "ul") {
          list = next as HTMLUListElement;
          break;
        }
        if (tag === "h2" || tag === "h3" || tag === "h4") {
          break;
        }
        next = next.nextElementSibling;
      }
    }

    if (!list) {
      list = doc.querySelector("ul");
    }
    if (!list) return [];

    return Array.from(list.querySelectorAll("li"))
      .map((li) => (li.textContent || "").trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function toAnchorId(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { data: companySettings, isLoading: settingsLoading } = useQuery<CompanySettings>({
    queryKey: ['/api/company-settings'],
  });
  const { data: servicePostsRaw, isLoading: postsLoading } = useQuery<ServicePost[]>({
    queryKey: ['/api/service-posts', 'published', 'footer'],
    queryFn: () => fetch('/api/service-posts?status=published').then((res) => res.json()),
  });

  const companyName = companySettings?.companyName?.trim() || "";
  const tagline =
    companySettings?.heroSubtitle?.trim() ||
    companySettings?.seoDescription?.trim() ||
    '';
  const servicePosts = useMemo(
    () =>
      Array.isArray(servicePostsRaw)
        ? [...servicePostsRaw].sort((a, b) => {
          const orderA = typeof a.order === "number" ? a.order : Number.MAX_SAFE_INTEGER;
          const orderB = typeof b.order === "number" ? b.order : Number.MAX_SAFE_INTEGER;
          if (orderA !== orderB) return orderA - orderB;
          return a.title.localeCompare(b.title);
        })
        : [],
    [servicePostsRaw]
  );
  const serviceGroups = useMemo(
    () =>
      servicePosts.map((post) => ({
        post,
        postPath: getServicePostPath(post.id, post.slug),
        items: extractIncludedServices(post.content).slice(0, 8),
      })),
    [servicePosts]
  );
  const leftColumnGroups = useMemo(
    () => serviceGroups.filter((_, index) => index % 2 === 0),
    [serviceGroups]
  );
  const rightColumnGroups = useMemo(
    () => serviceGroups.filter((_, index) => index % 2 === 1),
    [serviceGroups]
  );

  const renderServiceGroup = ({
    post,
    postPath,
    items,
  }: {
    post: ServicePost;
    postPath: string;
    items: string[];
  }) => {
    return (
      <div key={post.id} className="text-left px-4 py-3">
        <Link
          href={postPath}
          className="inline-block text-gray-100 font-semibold leading-tight hover:text-white transition-colors"
        >
          {post.title}
        </Link>

        {items.length > 0 ? (
          <ul className="mt-2 space-y-1.5 list-disc pl-5 marker:text-gray-500">
            {items.map((serviceItem) => {
              const subPath = `${postPath}#${toAnchorId(serviceItem)}`;
              return (
                <li key={`${post.id}-${serviceItem}`} className="text-sm text-gray-400 leading-relaxed">
                  <a href={subPath} className="hover:text-gray-200 transition-colors">
                    {serviceItem}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  };

  const isLoading = settingsLoading || postsLoading;

  return (
    <footer ref={ref} className="relative z-10 text-slate-300 py-8 md:py-10" style={{ backgroundColor: "var(--website-footer-bg)" }}>
      <div className="container-custom mx-auto">
        {isLoading ? (
          <div className="grid gap-10 md:grid-cols-12 animate-pulse">
            <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
              <div className="h-16 w-32 bg-white/10 rounded-md" />
              <div className="h-4 w-48 bg-white/10 rounded" />
              <div className="h-4 w-40 bg-white/10 rounded" />
            </div>
            <div className="md:col-span-8">
              <div className="space-y-3">
                <div className="h-4 w-32 bg-white/10 rounded" />
                <div className="h-3 w-24 bg-white/10 rounded" />
                <div className="h-3 w-28 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex">
              {companySettings?.logoDark ? (
                <img src={companySettings.logoDark} alt={companyName} className="h-16 w-auto object-contain" />
              ) : companySettings?.logoIcon ? (
                <img src={companySettings.logoIcon} alt={companyName} className="h-16 w-auto object-contain brightness-0 invert" />
              ) : (
                companyName ? <span className="text-white font-bold text-xl">{companyName}</span> : null
              )}
            </Link>

            {tagline ? (
              <p className="text-gray-400 text-sm leading-relaxed">{tagline}</p>
            ) : null}

            {companySettings && Array.isArray((companySettings as any).socialLinks) && (companySettings as any).socialLinks.length > 0 && (
              <div className="flex gap-3">
                {((companySettings as any).socialLinks as { platform: string; url: string }[]).map((link, i) => {
                  const Icon = platformIcons[link.platform.toLowerCase()] || SiFacebook;
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Col 2 — Services */}
          {servicePosts.length > 0 ? (
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Our Services</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {servicePosts.map((post) => (
                  <Link
                    key={post.id}
                    href={getServicePostPath(post.id, post.slug)}
                    className="text-gray-400 hover:text-gray-200 transition-colors text-sm font-medium leading-snug"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

        </div>
        )}
      </div>
      <div className="container-custom mx-auto mt-8 pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs md:text-sm">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs md:text-sm md:justify-end">
            <Link href="/contact" className="text-gray-400 hover:text-gray-200 transition-colors" onClick={() => import("@/lib/analytics").then(m => m.trackCTAClick('footer', 'Contact'))}>Contact</Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-gray-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="mt-6 h-10 mb-14 flex items-center justify-center" style={{ backgroundColor: "#111111" }}>
        <a
          href="https://skale.club"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          Developed by Skale Club
        </a>
      </div>
    </footer>
  );
});
