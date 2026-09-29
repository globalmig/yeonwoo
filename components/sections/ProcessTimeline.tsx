"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { LuPhoneCall, LuUserSearch, LuSearch, LuCircleCheckBig } from "react-icons/lu";

const STEPS = [
  { no: "01", icon: LuPhoneCall, title: "상담 신청" },
  { no: "02", icon: LuUserSearch, title: "사업 현황 확인" },
  { no: "03", icon: LuSearch, title: "가능 자금 안내" },
  { no: "04", icon: LuCircleCheckBig, title: "진행 안내" },
];

// 단계 유지 → 선이 흘러감 → 도착 직전에 다음 원이 켜짐
const HOLD_MS = 2000;
const TRAVEL_MS = 1500;
const ARRIVE_MS = 1300;
const LAST_HOLD_MS = 4200;
const RESET_MS = 900;

const CIRCLE_STATE = {
  current:
    "border-azure-600 bg-azure-600 text-white scale-110 shadow-[0_0_0_10px_rgba(59,140,192,0.16),0_16px_30px_-10px_rgba(43,112,160,0.55)]",
  done: "border-azure-300 bg-white text-azure-600 shadow-[0_0_0_8px_rgba(255,255,255,0.65),0_14px_28px_-12px_rgba(43,112,160,0.3)]",
  idle: "border-azure-100 bg-white text-azure-300 shadow-[0_0_0_8px_rgba(255,255,255,0.65),0_10px_22px_-12px_rgba(43,112,160,0.15)]",
} as const;

const NODE_TRANSITION: CSSProperties = {
  transitionProperty:
    "transform, background-color, border-color, color, box-shadow",
  transitionDuration: "800ms, 700ms, 700ms, 700ms, 900ms",
  transitionTimingFunction:
    "cubic-bezier(0.34, 1.56, 0.64, 1), ease-out, ease-out, ease-out, ease-out",
};

const SPARKLES = [
  { tx: -84, ty: 4 },
  { tx: -70, ty: -40 },
  { tx: -38, ty: -72 },
  { tx: 0, ty: -84 },
  { tx: 38, ty: -72 },
  { tx: 70, ty: -40 },
  { tx: 84, ty: 4 },
];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [resetting, setResetting] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    const run = (current: number) => {
      if (current === STEPS.length - 1) {
        later(() => {
          setResetting(true);
          setLineIdx(0);
          setActive(0);
        }, LAST_HOLD_MS);
        later(() => {
          setResetting(false);
          run(0);
        }, LAST_HOLD_MS + RESET_MS);
        return;
      }
      const next = current + 1;
      later(() => setLineIdx(next), HOLD_MS);
      later(() => setActive(next), HOLD_MS + ARRIVE_MS);
      later(() => run(next), HOLD_MS + TRAVEL_MS);
    };

    later(() => {
      setActive(0);
      setLineIdx(0);
      run(0);
    }, 0);

    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const progress = (lineIdx / (STEPS.length - 1)) * 100;
  const lineStyle = {
    transitionDuration: resetting ? "700ms" : `${TRAVEL_MS}ms`,
    transitionTimingFunction: resetting ? "ease-in" : "ease-in-out",
  };
  const head =
    "absolute h-3 w-3 rounded-full bg-white shadow-[0_0_14px_5px_rgba(98,170,212,0.85)]";

  return (
    <div ref={rootRef} className="relative mt-20 sm:mt-32">
      <div
        aria-hidden
        className="absolute bottom-10 left-10 top-10 w-0.5 rounded-full bg-azure-100 md:hidden"
      >
        <div
          className="relative w-full rounded-full bg-gradient-to-b from-azure-600 to-azure-400 transition-[height]"
          style={{ height: `${progress}%`, ...lineStyle }}
        >
          <span
            className={`${head} -bottom-1.5 left-1/2 -translate-x-1/2`}
          />
        </div>
      </div>
      <div
        aria-hidden
        className="absolute left-[12.5%] right-[12.5%] top-[51px] hidden h-0.5 rounded-full bg-azure-100 md:block"
      >
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-azure-600 to-azure-400 transition-[width]"
          style={{ width: `${progress}%`, ...lineStyle }}
        >
          <span className={`${head} -right-1.5 top-1/2 -translate-y-1/2`} />
        </div>
      </div>
      {[25, 50, 75].map((left, k) => {
        const lit = lineIdx > k;
        return (
          <span
            key={left}
            aria-hidden
            style={{
              left: `${left}%`,
              transitionDelay: lit ? `${TRAVEL_MS * 0.45}ms` : "0ms",
            }}
            className={`absolute top-[52px] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-azure-50 transition-all duration-700 md:block ${
              lit ? "scale-125 bg-azure-600" : "scale-100 bg-azure-200"
            }`}
          />
        );
      })}

      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-0">
        {STEPS.map((step, i) => {
          const state = i === active ? "current" : i < active ? "done" : "idle";
          return (
            <li
              key={step.no}
              aria-current={state === "current" ? "step" : undefined}
              className="flex items-center gap-5 md:flex-col md:gap-0"
            >
              <span
                style={NODE_TRANSITION}
                className={`relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border md:h-[104px] md:w-[104px] ${CIRCLE_STATE[state]}`}
              >
                {state === "current" && (
                  <>
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-azure-500/30 motion-safe:animate-ripple"
                    />
                    <span
                      aria-hidden
                      style={{ animationDelay: "1.3s" }}
                      className="absolute inset-0 rounded-full bg-azure-500/20 motion-safe:animate-ripple"
                    />
                    {SPARKLES.map((s, k) => (
                      <span
                        key={k}
                        aria-hidden
                        style={
                          {
                            "--tx": `${s.tx}px`,
                            "--ty": `${s.ty}px`,
                            animationDelay: `${k * 70}ms`,
                          } as CSSProperties
                        }
                        className="pointer-events-none absolute left-1/2 top-1/2 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-azure-300 shadow-[0_0_8px_2px_rgba(98,170,212,0.8)] motion-safe:animate-sparkle"
                      />
                    ))}
                  </>
                )}
                <step.icon
                  className={`relative h-9 w-9 md:h-11 md:w-11 ${
                    state === "current" ? "motion-safe:animate-icon-pop" : ""
                  }`}
                />
              </span>
              <div
                className={`flex-1 rounded-2xl px-6 py-4 text-left transition-all duration-700 ease-out md:mt-4 md:w-full md:max-w-[260px] md:flex-none md:py-5 md:text-center ${
                  state === "current"
                    ? "bg-white shadow-[0_18px_36px_-14px_rgba(43,112,160,0.4)] md:-translate-y-1.5"
                    : "bg-white/90 shadow-[0_14px_32px_-14px_rgba(43,112,160,0.28)]"
                }`}
              >
                <p
                  className={`text-sm font-bold tracking-wide transition-colors duration-700 ${
                    state === "idle" ? "text-azure-300" : "text-azure-600"
                  }`}
                >
                  STEP {step.no}
                </p>
                <p
                  className={`mt-1 text-xl font-bold transition-colors duration-700 ${
                    state === "idle" ? "text-azure-700" : "text-azure-950"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
