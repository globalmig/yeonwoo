"use client";

import { useEffect, useState } from "react";
import { LuCircleCheck } from "react-icons/lu";
import { TOAST_EVENT, type ToastDetail } from "@/lib/toast";

const DURATION_MS = 3000;

export default function Toaster() {
  const [current, setCurrent] = useState<(ToastDetail & { id: number }) | null>(null);

  useEffect(() => {
    const onToast = (e: Event) => {
      const { detail } = e as CustomEvent<ToastDetail>;
      setCurrent({ ...detail, id: Date.now() });
    };
    window.addEventListener(TOAST_EVENT, onToast);
    return () => window.removeEventListener(TOAST_EVENT, onToast);
  }, []);

  useEffect(() => {
    if (!current) return;
    const timer = setTimeout(() => setCurrent(null), DURATION_MS);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-5"
    >
      {current && (
        <div
          key={current.id}
          role="status"
          className="flex items-center gap-3 rounded-2xl bg-azure-950/95 px-5 py-3.5 text-white shadow-[0_16px_40px_-12px_rgba(20,42,60,0.6)] motion-safe:animate-toast-in"
        >
          <LuCircleCheck size={22} className="shrink-0 text-accent-500" />
          <div>
            <p className="text-sm font-semibold">{current.title}</p>
            {current.description && (
              <p className="mt-0.5 text-sm text-azure-200">{current.description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
