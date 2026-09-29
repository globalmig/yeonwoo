"use client";

import { useEffect, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { SHOW_FAQ_SECTION, SHOW_SERVICE_SECTION } from "@/lib/site-flags";

const NAV_LINKS = [
  { href: "#region", label: "연우가 하는 일", show: true },
  { href: "#service", label: "자금 종류", show: SHOW_SERVICE_SECTION },
  { href: "#process", label: "상담 절차", show: true },
  { href: "#faq", label: "자주 묻는 질문", show: SHOW_FAQ_SECTION },
].filter((link) => link.show);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("top");

    const onScroll = () => {
      const threshold = heroEl ? heroEl.offsetHeight - 64 : 400;
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {!scrolled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent"
        />
      )}

      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span
            className={`font-serif text-2xl font-bold transition-colors ${
              scrolled ? "text-azure-900" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            }`}
          >
            연우
          </span>
          <span
            className={`hidden text-xs transition-colors sm:inline ${
              scrolled ? "text-azure-400" : "text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            }`}
          >
            소상공인 자금 상담
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-azure-700 hover:text-azure-900"
                  : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] hover:text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className={`hidden items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors sm:flex ${
              scrolled
                ? "border-azure-200 text-azure-700 hover:border-azure-400"
                : "border-white/60 bg-black/10 text-white hover:border-white"
            }`}
          >
            <LuPhoneCall size={16} />
            전화 상담 문의
          </a>
          <a
            href="#contact"
            className="rounded-full bg-azure-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-azure-700 sm:px-5"
          >
            무료 상담 신청
          </a>
        </div>
      </div>
    </header>
  );
}
