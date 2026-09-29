import { FaCoins } from "react-icons/fa6";
import { LuAward, LuClipboardList } from "react-icons/lu";
import IconBadge from "@/components/IconBadge";

const SIDE_STATS = [
  {
    icon: LuAward,
    value: "5.4조 원",
    label: "2026년 소상공인 관련 예산",
    caption: "소상공인 전체 예산 기준",
  },
  {
    icon: LuClipboardList,
    value: "26개 사업",
    label: "2026년 주요 소상공인 지원사업",
    caption: "지원사업 통합공고 기준",
  },
];

const CARD_SHADOW = "shadow-[0_12px_32px_-12px_rgba(43,112,160,0.22)]";

export default function DataSection() {
  return (
    <section id="data">
      <div className="mx-auto max-w-360 px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-xl">
          <p className="text-lg font-bold leading-snug text-accent-600">
            소상공인을 위해 매년
            <br />
            정부가 지원하는 자금!
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-azure-950 min-[360px]:text-4xl sm:text-5xl">
            실제로는 얼마나
            <br />
            <span className="text-azure-600">지원되고 있을</span>까요?
          </h2>
          <p className="mt-6 leading-relaxed text-azure-700">
            정부는 매년 소상공인의 경영 안정을 위해
            <br />
            자금을 공급하고 있습니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
          <div
            className={`flex flex-col items-start gap-5 rounded-2xl border border-azure-100 border-t-2 border-t-azure-500 bg-white/95 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-10 ${CARD_SHADOW}`}
          >
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-24 sm:w-24">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-azure-100 to-azure-50" />
              <svg width="0" height="0" className="absolute" aria-hidden>
                <defs>
                  <linearGradient id="coin-blue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#62aad4" />
                    <stop offset="100%" stopColor="#2b70a0" />
                  </linearGradient>
                </defs>
              </svg>
              <FaCoins
                size={88}
                style={{ fill: "url(#coin-blue)" }}
                className="relative size-8 drop-shadow-[0_4px_6px_rgba(43,112,160,0.3)] sm:size-12"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-azure-700 min-[360px]:text-base">
                2026년 소상공인 자금 공급 규모
              </p>
              <p className="mt-3 text-3xl font-extrabold text-azure-950 min-[360px]:text-4xl sm:text-5xl lg:text-4xl xl:text-6xl">
                3조 3,620억 원
              </p>
              <p className="mt-3 text-sm text-azure-500">(변경공고 기준)</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {SIDE_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-1 items-center gap-4 rounded-2xl border border-azure-100/70 bg-white/95 p-5 sm:gap-5 sm:p-6 ${CARD_SHADOW}`}
              >
                <IconBadge
                  icon={stat.icon}
                  size={44}
                  boxClassName="h-12 w-12 sm:h-16 sm:w-16"
                  iconClassName="size-6 sm:size-8"
                  className="bg-azure-100/70 text-azure-500"
                />
                <div>
                  <p className="text-sm text-azure-600">{stat.label}</p>
                  <p className="mt-1 text-2xl font-extrabold text-azure-950 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-azure-500">
                    {stat.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-azure-500">
          ※ 상기 금액 및 건수는 정부 공고 및 공시 통계 기준으로, 변동될 수
          있습니다.
        </p>
      </div>
    </section>
  );
}
