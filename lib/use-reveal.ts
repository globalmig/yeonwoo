import { useEffect, useRef, useState } from "react";

/**
 * static: 최종 상태 (SSR · 모션 줄이기 설정)
 * armed:  시작 상태로 되돌려 둔 채 화면 진입 대기
 * run:    화면에 들어와 재생 중/완료
 */
export type RevealPhase = "static" | "armed" | "run";

export function useReveal<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<RevealPhase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // armed 상태가 한 번 그려진 뒤 재생해야 transition이 걸림
        frame = requestAnimationFrame(() => setPhase("run"));
      },
      { threshold },
    );

    frame = requestAnimationFrame(() => {
      setPhase("armed");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return [ref, phase] as const;
}
