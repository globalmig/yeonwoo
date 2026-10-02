"use client";

import { useReveal } from "@/lib/use-reveal";

interface TrendPoint {
  year: string;
  sub?: string;
  value: string;
  height: string;
}

const BAR_STAGGER_MS = 180;
const BAR_GROW_MS = 1000;

export default function BalanceTrendChart({ data }: { data: TrendPoint[] }) {
  const [ref, phase] = useReveal<HTMLUListElement>(0.4);
  const armed = phase === "armed";
  const running = phase === "run";

  return (
    <ul ref={ref} className="mt-4 grid flex-1 grid-cols-3">
      {data.map((item, i) => {
        const barDelay = i * BAR_STAGGER_MS;
        return (
          <li key={item.year} className="flex flex-col items-center">
            <div className="flex min-h-36 w-full flex-1 flex-col items-center justify-end border-b border-azure-200">
              <span
                className={`mb-1.5 text-xs font-bold text-azure-950 sm:text-sm ${
                  running ? "transition duration-500 ease-out" : ""
                } ${armed ? "translate-y-2 opacity-0" : ""}`}
                style={{
                  transitionDelay: running
                    ? `${barDelay + BAR_GROW_MS * 0.7}ms`
                    : undefined,
                }}
              >
                {item.value}
              </span>
              <span
                aria-hidden
                className={`w-10 rounded-t bg-azure-500 sm:w-12 ${
                  running ? "transition-[height] ease-out" : ""
                }`}
                style={{
                  height: armed ? "0%" : item.height,
                  transitionDuration: running ? `${BAR_GROW_MS}ms` : undefined,
                  transitionDelay: running ? `${barDelay}ms` : undefined,
                }}
              />
            </div>
            {/* 라벨 높이를 고정해 (1분기) 유무와 관계없이 기준선을 맞춤 */}
            <div className="mt-2 flex h-8 flex-col items-center">
              <span className="text-xs text-azure-700">{item.year}</span>
              {item.sub && (
                <span className="text-[11px] text-azure-500">{item.sub}</span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
