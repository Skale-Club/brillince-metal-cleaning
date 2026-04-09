import { useEffect, useState, RefObject } from "react";
import { LeadFormModal } from "@/components/LeadFormModal";

export function StickyBottomBar({ footerRef }: { footerRef: RefObject<HTMLElement> }) {
  const [visible, setVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () => setBottomOffset(Math.max(0, window.innerHeight - vv.height - (vv.offsetTop ?? 0)));
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => { vv.removeEventListener("resize", update); vv.removeEventListener("scroll", update); };
  }, []);

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-40 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ bottom: bottomOffset }}
      >
        <div className="backdrop-blur-md py-3 px-4" style={{ backgroundColor: "var(--website-nav-bg)" }}>
          <div className="flex justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="website-cta w-full rounded-full py-3 text-sm font-bold md:w-[40%] md:text-base"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      <LeadFormModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
