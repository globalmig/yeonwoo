"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const DURATION_MS = 1600;

interface CountUpProps {
  value: number;
  decimals?: number;
}

export default function CountUp({ value, decimals = 0 }: CountUpProps) {
  const [ref, phase] = useReveal<HTMLSpanElement>();
  // null = 아직 첫 프레임 전 (0으로 표시)
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    if (phase !== "run") return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  const format = (n: number) =>
    n.toLocaleString("ko-KR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  const ratio = phase === "static" ? 1 : phase === "armed" ? 0 : (progress ?? 0);

  // 스크린리더에는 올라가는 중간값 대신 최종 값만 읽힘
  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden>{format(value * ratio)}</span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}
