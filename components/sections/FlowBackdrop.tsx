import type { ReactNode } from "react";

const DOT_GRID = {
  backgroundImage: "radial-gradient(circle, #96c9e6 1.5px, transparent 1.5px)",
  backgroundSize: "22px 22px",
};

export default function FlowBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden bg-linear-to-b from-white via-azure-50 to-azure-100/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0, black 14%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, black 14%)",
        }}
      >
        <div className="absolute left-[83.5%] top-[5%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 lg:h-[760px] lg:w-[760px]">
          <div className="absolute inset-0 rounded-full border border-azure-200/50" />
          <div className="absolute inset-[12%] rounded-full border border-azure-200/50" />
          <div className="absolute inset-[24%] rounded-full border border-azure-200/40" />
          <div className="absolute inset-[38%] rounded-full bg-azure-200/40" />
        </div>
        <div
          className="absolute left-[85%] top-[12%] hidden h-24 w-40 lg:block"
          style={DOT_GRID}
        />

        <div className="absolute -left-[6%] top-[34%] h-72 w-[50%] rounded-full bg-azure-100/60 blur-3xl" />
        <div className="absolute -right-[4%] top-[40%] h-64 w-[45%] rounded-full bg-azure-200/40 blur-3xl" />

        <div className="absolute -right-32 top-[52%] h-[520px] w-[520px] rounded-full bg-azure-100/80 lg:h-[680px] lg:w-[680px]" />
        <div className="absolute -right-56 top-[46%] h-[520px] w-[520px] rounded-full bg-white/70 lg:h-[680px] lg:w-[680px]" />
        <div className="absolute -right-[10%] top-[66%] hidden h-[640px] w-[640px] rounded-full border border-azure-200/50 lg:block" />
        <div
          className="absolute right-[3%] top-[63%] hidden h-28 w-44 lg:block"
          style={DOT_GRID}
        />

        <div className="absolute -bottom-40 -left-40 h-[460px] w-[760px] rounded-[50%] bg-azure-100/70" />
        <div
          className="absolute bottom-[3%] left-[3%] hidden h-24 w-36 lg:block"
          style={DOT_GRID}
        />
      </div>
      {children}
    </div>
  );
}
