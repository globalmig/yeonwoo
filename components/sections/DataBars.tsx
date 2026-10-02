"use client";

import type { CSSProperties } from "react";
import { useReveal, type RevealPhase } from "@/lib/use-reveal";

const GROW_MS = 900;
const STAGGER_MS = 120;

/* 화면에 들어오면 막대가 왼쪽에서부터 차례로 자라남 (BalanceTrendChart와 같은 방식) */
function grow(phase: RevealPhase, i: number): { className: string; style: CSSProperties } {
  const running = phase === "run";
  return {
    className: running ? "transition-transform ease-out" : "",
    style: {
      transform: phase === "armed" ? "scaleX(0)" : undefined,
      transitionDuration: running ? `${GROW_MS}ms` : undefined,
      transitionDelay: running ? `${i * STAGGER_MS}ms` : undefined,
    },
  };
}

export interface ShareItem {
  label: string;
  value: string;
  /** 막대 길이 (0~100) */
  percent: number;
}

export function ShareBars({ items }: { items: ShareItem[] }) {
  const [ref, phase] = useReveal<HTMLUListElement>(0.4);

  return (
    <ul ref={ref} className="mt-5 space-y-3.5">
      {items.map((item, i) => {
        const g = grow(phase, i);
        return (
          <li key={item.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-azure-800 sm:text-[15px]">{item.label}</span>
              <span className="whitespace-nowrap font-extrabold tabular-nums text-azure-950">
                {item.value}
              </span>
            </div>
            <div aria-hidden className="mt-1.5 h-2 rounded-full bg-azure-100">
              <span
                className={`block h-full origin-left rounded-full bg-azure-500 ${g.className}`}
                style={{ width: `${item.percent}%`, ...g.style }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
