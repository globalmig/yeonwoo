"use client";

import { useEffect, useState } from "react";
import { LuMenu, LuPhoneCall, LuX } from "react-icons/lu";
import { SHOW_FAQ_SECTION, SHOW_SERVICE_SECTION } from "@/lib/site-flags";
import { COMPANY } from "@/lib/legal";
import PhoneLink from "@/components/PhoneLink";

const NAV_LINKS = [
  { href: "#data", label: "지원 현황", show: true },
  { href: "#region", label: "연우가 하는 일", show: true },
  { href: "#service", label: "자금 종류", show: SHOW_SERVICE_SECTION },
  { href: "#process", label: "상담 절차", show: true },
  { href: "#about", label: "연우 소개", show: true },
  { href: "#faq", label: "자주 묻는 질문", show: SHOW_FAQ_SECTION },
].filter((link) => link.show);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  // Solid header while scrolled past the hero or while the mobile menu is open
  const solid = scrolled || menuOpen;

  useEffect(() => {
    // Stay transparent only while over the hero photo (a top band on mobile)
    const heroEl =
      document.getElementById("hero-media") ?? document.getElementById("top");

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

  // Highlight the nav link for the section currently under the header
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-64px 0px -60% 0px" },
    );

    sections.forEach((el) => observer.observe(el));

    // Clear the highlight once back above the first linked section
    const onScroll = () => {
      const first = sections[0];
      if (first && first.getBoundingClientRect().top > 64) setActiveHref(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onBreakpoint = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-(--color-line) bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {!solid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-transparent"
        />
      )}

      <div className="relative mx-auto flex h-16 max-w-360 items-center justify-between px-5 sm:px-8">
        <a href="#top" onClick={closeMenu} className="flex shrink-0 items-baseline gap-2">
          <span
            className={`font-serif text-2xl font-bold transition-colors ${
              solid ? "text-azure-900" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            }`}
          >
            연우
          </span>
          <span
            className={`hidden whitespace-nowrap text-xs transition-colors xl:inline ${
              solid ? "text-azure-400" : "text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            }`}
          >
            소상공인 자금 상담
          </span>
        </a>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => {
            const active = link.href === activeHref;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "location" : undefined}
                className={`whitespace-nowrap text-sm transition-colors ${
                  solid
                    ? active
                      ? "font-bold text-azure-600"
                      : "font-medium text-azure-700 hover:text-azure-900"
                    : "font-medium text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] hover:text-white/80"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <PhoneLink
            aria-label={`전화 상담 문의 ${COMPANY.phone}`}
            className={`hidden items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors sm:flex ${
              solid
                ? "border-azure-200 text-azure-700 hover:border-azure-400"
                : "border-white/60 bg-black/10 text-white hover:border-white"
            }`}
          >
            <LuPhoneCall size={16} />
            전화 상담 문의
          </PhoneLink>
          <a
            href="#contact"
            onClick={closeMenu}
            className="whitespace-nowrap rounded-full bg-azure-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-azure-700 sm:px-5"
          >
            무료 상담 신청
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className={`-mr-2 flex size-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid
                ? "text-azure-900 hover:bg-azure-50"
                : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] hover:bg-white/10"
            }`}
          >
            {menuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="주요 메뉴"
          className="relative border-t border-(--color-line) bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-360 px-5 py-2 sm:px-8">
            {NAV_LINKS.map((link) => {
              const active = link.href === activeHref;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={active ? "location" : undefined}
                    className={`block py-3.5 text-base transition-colors ${
                      active
                        ? "font-bold text-azure-600"
                        : "font-medium text-azure-800 hover:text-azure-950"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="border-t border-(--color-line)">
              <PhoneLink
                onClick={closeMenu}
                className="flex items-center gap-2 py-3.5 text-base font-semibold text-azure-600"
              >
                <LuPhoneCall size={18} />
                전화 상담 {COMPANY.phone}
              </PhoneLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
